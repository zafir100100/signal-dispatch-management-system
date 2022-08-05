const { Model, DataTypes } = require('sequelize');
const sequelize = require("../../utils/db-connection");

class TransitSlipDistribution extends Model { }
TransitSlipDistribution.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  sent_from: DataTypes.INTEGER,
  sent_to: DataTypes.INTEGER,
}, { sequelize, tableName: 'transit_slip_distribution', freezeTableName: true });

TransitSlipDistribution.sync({
  force: false,
});

module.exports = TransitSlipDistribution;
