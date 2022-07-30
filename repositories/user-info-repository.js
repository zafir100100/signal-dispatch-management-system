const User = require("../models/tables/user_info");
const ResponseDto = require("../models/DTOs/ResponseDto");
const sequelize = require("../utils/db-connection");

let userRepository = (module.exports = {});

async function createUser(req) {
const output = new ResponseDto();
try {

  const result = await sequelize.transaction(async (t) => {

    const maxUserId = (await User.max('id') ?? 0)+1; 
    const user = await User.create({
      id: maxUserId,
      user_full_name: 'Abraham',
      user_name: 'hi'
    }, { transaction: t });


    output.message = "User Creation Successful."
    output.isSuccess = true;
    output.statusCode = 200;
    output.payload = {
      output: user
    }
  });

  return output;


} catch (error) {
  console.log('x xxxxx x');
  console.log(error);
  output.payload = {
    errorDetails: error
  }

  return output;

}
}

userRepository.create = async function(req,res){     
  const output = await createUser(req);
  res.status(output.statusCode);
  res.send(output);
}

// async function register() {
  
//   try {
//       await sequelize.transaction(async function (transaction) {
//           // chain all your queries here. make sure you return them.
//           const user = await User.create({
//               name: 'Van Helsing'
//           }, { transaction });
          
//           await ShippingAddress.create({
//               address: 'Transylvania',
//               user_id: user.id
//           }, { transaction });
          
//           return user;
//       });
//       console.log('success');
//   } catch (error) {
//       console.log('error');
//   }
//   return null;
// }