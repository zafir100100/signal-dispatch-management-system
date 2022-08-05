const { Model, DataTypes } = require('sequelize');
const sequelize = require("../../utils/db-connection");

class TransitSlipEnvelop extends Model { }
TransitSlipEnvelop.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  transit_slip_id: DataTypes.INTEGER,
  sl_no: DataTypes.STRING,
  originator_no: DataTypes.STRING,
  precedence: DataTypes.STRING,
  transit_from: DataTypes.STRING,
  transit_to: DataTypes.STRING,
  created_at: DataTypes.STRING,
  created_by: DataTypes.INTEGER,
  edited_at: DataTypes.STRING,
  edited_by: DataTypes.INTEGER
}, { sequelize, tableName: 'transit_slip_envelop', freezeTableName: true });

TransitSlipEnvelop.sync({
  force: false,
});

module.exports = TransitSlipEnvelop;