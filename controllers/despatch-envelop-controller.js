const despatchEnvelopRepository = require("../repositories/despatch-envelop-repository")
const express = require("express");
const router = express.Router();

router.post("/create-despatch-envelop", (req, res) =>
    despatchEnvelopRepository.create(req, res)
);

module.exports = router