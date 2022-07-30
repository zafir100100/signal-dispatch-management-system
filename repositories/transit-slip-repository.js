const transitSlipDb = require('../models/tables/transit_slip');

const transitSlips = (module.exports = {});

transitSlips.create = (req, res) => transitSlipDb
  .create({
    id: req.body.id,
    transit_slip_no: req.body.transit_slip_no,
    transit_from: req.body.transit_from,
    transit_to: req.body.transit_to,
    transit_method: req.body.transit_method,
    name_of_courier: req.body.name_of_courier,
    transit_date: req.body.transit_date,
  })
  .then((result) => res.json(result));
