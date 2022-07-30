let despatchEnvelopDb = require("../models/tables/despatch_envelop");

let despatchEnvelops = (module.exports = {});

despatchEnvelops.create = (req, res) =>
  despatchEnvelopDb
    .create({
      id: req.body.id,
      letter_no: req.body.letter_no,
      date_time_group: req.body.date_time_group,
      originator_no: req.body.originator_no,
      from_address: req.body.from_address,
      to_address: req.body.to_address,
      precedance: req.body.precedance,
      time_of_receive: req.body.precedance,
      despatch_status: req.body.precedance,
      despatch_type: req.body.precedance,
      time_of_delivery: req.body.precedance
    })
    .then((result) => res.json(result));
