const Sequelize = require("sequelize");

const PGHOST = "localhost";
const PGDATABASE = "signal_dispatch_handler";
const PGUSER = "postgres";
const PGPASSWORD = "postgres";

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  // logging: (...msg) => console.log(msg),
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
