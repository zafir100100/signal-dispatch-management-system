const User = require("../models/tables/user_info");
const ResponseDto = require("../models/DTOs/ResponseDto");
const sequelize = require("../utils/db-connection");

let userRepository = (module.exports = {});

async function createUser(req) {
  const output = new ResponseDto();
  try {
    const result = await sequelize.transaction(async (t) => {
      const maxId = ((await User.max("id")) ?? 0) + 1;
      req.body.id = maxId;
      const user = await User.create(
        req.body,
        { transaction: t }
      );

      output.message = "User Creation Successful.";
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

userRepository.create = async function (req, res) {
  const output = await createUser(req);
  res.status(output.statusCode);
  res.send(output);
};