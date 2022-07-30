const transitSlipRepository = require("../repositories/transit-slip-repository");
const express = require("express");
const router = express.Router();

router.post("/create-transit-slip", (req, res) =>
  transitSlipRepository.create(req, res)
);

module.exports = router;
