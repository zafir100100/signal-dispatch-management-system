const TransitSlip = require('../models/tables/transit_slip');
const ResponseDto = require("../models/DTOs/ResponseDto");
const sequelize = require("../utils/db-connection");

const transitSlipRepository = (module.exports = {});

async function createTransitSlip(req) {
  const output = new ResponseDto();
  try {
    const result = await sequelize.transaction(async (t) => {
      const maxId = ((await TransitSlip.max("id")) ?? 0) + 1;
      req.body.id = maxId;
      const user = await TransitSlip.create(
        req.body,
        { transaction: t }
      );

      output.message = "Transit Slip Creation Successful.";
      output.isSuccess = true;
      output.statusCode = 200;
      output.payload = {
        output: user,
      };
    });

    return output;
  } catch (error) {
    output.payload = {
      errorDetails: error,
    };

    return output;
  }
}

transitSlipRepository.create = async function (req, res) {
  const output = await createTransitSlip(req);
  res.status(output.statusCode);
  res.send(output);
};
