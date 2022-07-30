const userInfoRepository = require("../repositories/user-info-repository");
const express = require("express");
const router = express.Router();

router.post("/create-user", (req, res) => userInfoRepository.create(req, res));

module.exports = router;
