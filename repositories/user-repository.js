let userDb = require("../models/tables/user_info");

let users = (module.exports = {});

users.create = (req, res) =>
  userDb
    .create({
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
    })
    .then((result) => res.json(result));
