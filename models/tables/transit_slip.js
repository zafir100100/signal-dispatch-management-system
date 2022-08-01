const { Model, DataTypes } = require('sequelize');
const sequelize = require("../../utils/db-connection");

class TransitSlip extends Model { }
TransitSlip.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  transit_slip_no: DataTypes.STRING,
  transit_from: DataTypes.INTEGER,
  transit_to: DataTypes.INTEGER,
  transit_method: DataTypes.STRING,
  name_of_courier: DataTypes.STRING,
  transit_date: DataTypes.STRING,
}, { sequelize, tableName: 'transit_slip', freezeTableName: true });

TransitSlip.sync({
  force: false,
});

module.exports = TransitSlip;
