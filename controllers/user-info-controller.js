const userInfoRepository = require("../repositories/user-info-repository")
const express = require("express");
const router = express.Router();

router.post("/create-user", (req, res) =>
    userInfoRepository.create(req, res)
);

router.post("/get-user-by-id", (req, res) =>
    userInfoRepository.getById(req, res)
);

router.post("/get-user-by-username-and-password", (req, res) =>
    userInfoRepository.getByUnAndPass(req, res)
);

router.post("/delete-user", (req, res) =>
    userInfoRepository.deleteById(req, res)
);

router.post("/update-user", (req, res) =>
    userInfoRepository.updateById(req, res)
);

module.exports = router