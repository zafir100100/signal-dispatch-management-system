const sequelize = require("../../utils/db-connection");
const Sequelize = require("sequelize");

const User = sequelize.define(
  'user_info',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    user_full_name: {
      type: Sequelize.STRING,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    user_password: {
      type: Sequelize.STRING,
    },
    user_email: {
      type: Sequelize.STRING,
    },
    user_army_number: {
      type: Sequelize.STRING,
    },
    user_rank: {
      type: Sequelize.STRING,
    },
    user_role: {
      type: Sequelize.STRING,
    },
    user_serving_unit: {
      type: Sequelize.STRING,
    },
    user_status: {
      type: Sequelize.STRING,
    }
  }, {
  freezeTableName: true,
});

User.sync({
  force: false
});

module.exports = User;

