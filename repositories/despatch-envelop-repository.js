let DespatchEnvelop = require("../models/tables/despatch_envelop");
const ResponseDto = require("../models/DTOs/ResponseDto");
const sequelize = require("../utils/db-connection");

let despatchEnvelopRepository = (module.exports = {});

async function createDespatchEnvelop(req) {
  const output = new ResponseDto();
  try {
    const result = await sequelize.transaction(async (t) => {
      const maxId = ((await DespatchEnvelop.max("id")) ?? 0) + 1;
      req.body.id = maxId;
      const user = await DespatchEnvelop.create(
        req.body,
        { transaction: t }
      );

      output.message = "Despatch Envelop Creation Successful.";
      output.isSuccess = true;
      output.statusCode = 200;
      output.payload = {
        output: user,
      };
    });

    return output;
  } catch (error) {
    output.payload = {
      errorDetails: error,
    };

    return output;
  }
}

async function getDespatchEnvelopById(req) {
  const output = new ResponseDto();
  try {
      const despatchEnvelop = await DespatchEnvelop.findOne({
          where: {
              id: req.body.id,
          },
      });

      if (!despatchEnvelop) {
          output.message = 'No despatch envelop found with the given id.';
          output.statusCode = 404;
          return output;
      }

      output.message = 'Despatch Envelop found with the given id.';
      output.statusCode = 200;
      output.payload = {
          output: despatchEnvelop,
      };
      return output;
  } catch (error) {
      output.payload = {
          errorDetails: error,
      };

      return output;
  }
}

async function getDespatchEnvelopByLetterNo(req) {
  const output = new ResponseDto();
  try {
      const despatchEnvelop = await DespatchEnvelop.findOne({
          where: {
            letter_no: req.body.letter_no,
          },
      });

      if (!despatchEnvelop) {
          output.message = 'No Despatch Envelop found with the given letter no.';
          output.statusCode = 404;
          return output;
      }

      output.message = 'Despatch Envelop found with the given letter no.';
      output.statusCode = 200;
      output.payload = {
          output: despatchEnvelop,
      };
      return output;
  } catch (error) {
      output.payload = {
          errorDetails: error,
      };

      return output;
  }
}

async function deleteDespatchEnvelopById(req) {
  const output = new ResponseDto();
  try {
      const result = await sequelize.transaction(async (t) => {
          const despatchEnvelop = await DespatchEnvelop.findOne({
              where: {
                  id: req.body.id,
              },
              transaction: t,
          });

          if (!despatchEnvelop) {
              output.message = 'No despatchEnvelop found with the given id.';
              output.statusCode = 404;
              return output;
          }

          await DespatchEnvelop.destroy({
              where: {
                  id: req.body.id,
              },
              transaction: t,
          });

          output.message = 'Despatch Envelop Deletion Successful.';
          output.isSuccess = true;
          output.statusCode = 200;
          output.payload = {
              output: despatchEnvelop,
          };
      });

      return output;
  } catch (error) {
      output.payload = {
          errorDetails: error,
      };

      return output;
  }
}

async function updateDespatchEnvelopById(req) {
  const output = new ResponseDto();
  try {
      const result = await sequelize.transaction(async (t) => {
          const despatchEnvelop = await DespatchEnvelop.findOne({
              where: {
                  id: req.body.id,
              },
              transaction: t,
          });

          if (!despatchEnvelop) {
              output.message = 'No despatch envelop found with the given id.';
              output.statusCode = 404;
              return output;
          }

          await DespatchEnvelop.update(req.body, {
              where: {
                  id: req.body.id,
              },
              transaction: t,
          });

          output.message = 'Despatch Envelop Update Successful.';
          output.isSuccess = true;
          output.statusCode = 200;
          output.payload = {
              output: despatchEnvelop,
          };
      });

      return output;
  } catch (error) {
      output.payload = {
          errorDetails: error,
      };

      return output;
  }
}

despatchEnvelopRepository.create = async function (req, res) {
  const output = await createDespatchEnvelop(req);
  res.status(output.statusCode);
  res.send(output);
};

despatchEnvelopRepository.getById = async function (req, res) {
  const output = await getDespatchEnvelopById(req);
  res.status(output.statusCode);
  res.send(output);
};

despatchEnvelopRepository.getByLetterNo = async function (req, res) {
  const output = await getDespatchEnvelopByLetterNo(req);
  res.status(output.statusCode);
  res.send(output);
};

despatchEnvelopRepository.delete = async function (req, res) {
  const output = await deleteDespatchEnvelopById(req);
  res.status(output.statusCode);
  res.send(output);
};

despatchEnvelopRepository.update = async function (req, res) {
  const output = await updateDespatchEnvelopById(req);
  res.status(output.statusCode);
  res.send(output);
};

