const express = require("express");
const app = express();
const port = 8090;
const cors = require("cors");
const userService = require("./repositories/user-info-repository");
const transitSlipService = require("./repositories/transit-slip-repository");
const despatchEnvelopService = require("./repositories/despatch-envelop-repository");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.json({
    message: "Hello World",
  })
);

app.post("/create-user");

app.post("/create-user", (req, res) => userService.create(req, res));

app.post("/create-despatch-envelop", (req, res) =>
  despatchEnvelopService.create(req, res)
);

app.post("/create-transit-slip", (req, res) =>
  transitSlipService.create(req, res)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
