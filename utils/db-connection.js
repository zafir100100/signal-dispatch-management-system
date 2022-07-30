const Sequelize = require("sequelize");

// //local
// const PGHOST = "localhost";
// const PGDATABASE = "signal_dispatch_handler";
// const PGUSER = "postgres";
// const PGPASSWORD = "postgres";

//heroku
const PGHOST = "ec2-18-214-134-226.compute-1.amazonaws.com";
const PGDATABASE = "d6k137b9135j9b";
const PGUSER = "xdizqtwlqqejgp";
const PGPASSWORD = "5ec63913d6f457c3af86187215596812f4b41f4299d9fbd27b580df0504a4339";

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
