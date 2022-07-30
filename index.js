const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const port = 8090;
const cors = require("cors");

app.use(cors());
app.use(express.json());

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
  logging: (...msg) => console.log(msg),
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define(
  "user_info",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
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
    },
  },
  {
    freezeTableName: true,
  }
);

User.sync({
  force: false,
});

const DespatchEnvelop = sequelize.define(
  "despatch_envelop",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    letter_no: {
      type: Sequelize.STRING,
    },
    date_time_group: {
      type: Sequelize.STRING,
    },
    originator_no: {
      type: Sequelize.STRING,
    },
    from_address: {
      type: Sequelize.STRING,
    },
    to_address: {
      type: Sequelize.STRING,
    },
    precedance: {
      type: Sequelize.STRING,
    },
    time_of_receive: {
      type: Sequelize.STRING,
    },
    despatch_status: {
      type: Sequelize.STRING,
    },
    despatch_type: {
      type: Sequelize.STRING,
    },
    time_of_delivery: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

DespatchEnvelop.sync({
  force: false,
});

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

app.get("/", (req, res) =>
  res.json({
    message: "Hello World",
  })
);

app.post("/create-user", (req, res) =>
  User.create({
    id: req.body.id,
    user_full_name: req.body.user_full_name,
    user_name: req.body.user_name,
    user_password: req.body.user_password,
    user_email: req.body.user_email,
    user_army_number: req.body.user_army_number,
    user_rank: req.body.user_rank,
    user_role: req.body.user_role,
    user_serving_unit: req.body.user_serving_unit,
    user_status: req.body.user_status,
  }).then((result) => res.json(result))
);

app.post("/create-user", (req, res) =>
  User.create({
    id: User.max("id") ?? 1,
    user_full_name: req.body.user_full_name,
    user_name: req.body.user_name,
    user_password: req.body.user_password,
    user_email: req.body.user_email,
    user_army_number: req.body.user_army_number,
    user_rank: req.body.user_rank,
    user_role: req.body.user_role,
    user_serving_unit: req.body.user_serving_unit,
    user_status: req.body.user_status,
  }).then((result) => res.json(result))
);

app.post("/create-despatch-envelop", (req, res) =>
  DespatchEnvelop.create({
    id: req.body.id,
    letter_no: req.body.letter_no,
    date_time_group: req.body.date_time_group,
    originator_no: req.body.originator_no,
    from_address: req.body.from_address,
    to_address: req.body.to_address,
    precedance: req.body.precedance,
    time_of_receive: req.body.time_of_receive,
    despatch_status: req.body.despatch_status,
    despatch_type: req.body.despatch_type,
    time_of_delivery: req.body.time_of_delivery,
  }).then((result) => res.json(result))
);

app.post("/create-transit-slip", (req, res) =>
  TransitSlip.create({
    id: req.body.id,
    transit_slip_no: req.body.transit_slip_no,
    transit_from: req.body.transit_from,
    transit_to: req.body.transit_to,
    transit_method: req.body.transit_method,
    name_of_courier: req.body.name_of_courier,
    transit_date: req.body.transit_date,
  }).then((result) => res.json(result))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
