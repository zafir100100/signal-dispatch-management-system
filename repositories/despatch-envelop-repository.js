let DespatchEnvelop = require("../models/tables/despatch_envelop");
const ResponseDto = require("../models/DTOs/ResponseDto");
const sequelize = require("../utils/db-connection");

let despatchEnvelopRepository = (module.exports = {});

async function createDespatchEnvelop(req) {
  const output = new ResponseDto();
  try {
    const result = await sequelize.transaction(async (t) => {
      const maxId = ((await DespatchEnvelop.max("id")) ?? 0) + 1;
      req.body.id = maxId;
      const user = await DespatchEnvelop.create(
        req.body,
        { transaction: t }
      );

      output.message = "Despatch Envelop Creation Successful.";
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

despatchEnvelopRepository.create = async function (req, res) {
  const output = await createDespatchEnvelop(req);
  res.status(output.statusCode);
  res.send(output);
};
