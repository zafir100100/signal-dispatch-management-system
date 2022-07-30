const { Model, DataTypes } = require('sequelize');
const sequelize = require("../../utils/db-connection");

class User extends Model { }
User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_full_name: DataTypes.STRING,
  user_name: DataTypes.STRING,
  user_password: DataTypes.STRING,
  user_email: DataTypes.STRING,
  user_army_number: DataTypes.STRING,
  user_rank: DataTypes.STRING,
  user_role: DataTypes.STRING,
  user_serving_unit: DataTypes.STRING,
  user_status: DataTypes.STRING
}, { sequelize, freezeTableName: true, tableName: 'user_info' });

User.sync({
  force: false
});

module.exports = User;

