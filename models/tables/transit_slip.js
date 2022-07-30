const sequelize = require("../../utils/db-connection");
const Sequelize = require("sequelize");

const TransitSlip = sequelize.define(
  "transit_slip",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    transit_slip_no: {
      type: Sequelize.STRING,
    },
    transit_from: {
      type: Sequelize.STRING,
    },
    transit_to: {
      type: Sequelize.STRING,
    },
    transit_method: {
      type: Sequelize.STRING,
    },
    name_of_courier: {
      type: Sequelize.STRING,
    },
    transit_date: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

TransitSlip.sync({
  force: false,
});

module.exports = TransitSlip;
