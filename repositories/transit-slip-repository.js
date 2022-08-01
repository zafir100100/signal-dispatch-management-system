const TransitSlip = require('../models/tables/transit_slip');
const ResponseDto = require('../models/DTOs/ResponseDto');
const sequelize = require('../utils/db-connection');

const transitSlipRepository = (module.exports = {});

async function createTransitSlip(req) {
    const output = new ResponseDto();
    try {
        const result = await sequelize.transaction(async (t) => {
            const transitSlipNoCheck = await TransitSlip.findOne({
                where: {
                    transit_slip_no: req.body.transit_slip_no,
                },
            });

            if (transitSlipNoCheck) {
                output.message = 'The given transit slip no already exists.';
                output.statusCode = 409;
                return output;
            }
            const maxId = ((await TransitSlip.max('id')) ?? 0) + 1;
            req.body.id = maxId;
            const transitSlip = await TransitSlip.create(req.body, { transaction: t });

            output.message = 'Transit Slip Creation Successful.';
            output.isSuccess = true;
            output.statusCode = 200;
            output.payload = {
                output: transitSlip,
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

async function getTransitSlipById(req) {
    const output = new ResponseDto();
    try {
        const transitSlip = await TransitSlip.findOne({
            where: {
                id: req.body.id,
            },
        });

        if (!transitSlip) {
            output.message = 'No transit Slip found with the given id.';
            output.statusCode = 404;
            return output;
        }

        output.message = 'Transit Slip found with the given id.';
        output.isSuccess = true;
        output.statusCode = 200;
        output.payload = {
            output: transitSlip,
        };
        return output;
    } catch (error) {
        output.payload = {
            errorDetails: error,
        };

        return output;
    }
}

async function getTransitSlipBySlipNo(req) {
    const output = new ResponseDto();
    try {
        const transitSlip = await TransitSlip.findOne({
            where: {
                transit_slip_no: req.body.transit_slip_no,
            },
        });

        if (!transitSlip) {
            output.message = 'No transit Slip found with the given transit slip no.';
            output.statusCode = 404;
            return output;
        }

        output.message = 'Transit Slip found with the given transit slip no.';
        output.isSuccess = true;
        output.statusCode = 200;
        output.payload = {
            output: transitSlip,
        };
        return output;
    } catch (error) {
        output.payload = {
            errorDetails: error,
        };

        return output;
    }
}

async function deleteTransitSlipById(req) {
    const output = new ResponseDto();
    try {
        const result = await sequelize.transaction(async (t) => {
            const transitSlip = await TransitSlip.findOne({
                where: {
                    id: req.body.id,
                },
                transaction: t,
            });

            if (!transitSlip) {
                output.message = 'No transitSlip found with the given id.';
                output.statusCode = 404;
                return output;
            }

            await TransitSlip.destroy({
                where: {
                    id: req.body.id,
                },
                transaction: t,
            });

            output.message = 'Transit Slip Deletion Successful.';
            output.isSuccess = true;
            output.statusCode = 200;
            output.payload = {
                output: transitSlip,
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

async function updateTransitSlipById(req) {
    const output = new ResponseDto();
    try {
        const result = await sequelize.transaction(async (t) => {
            const transitSlip = await TransitSlip.findOne({
                where: {
                    id: req.body.id,
                },
                transaction: t,
            });

            if (!transitSlip) {
                output.message = 'No transit slip found with the given id.';
                output.statusCode = 404;
                return output;
            }

            await TransitSlip.update(req.body, {
                where: {
                    id: req.body.id,
                },
                transaction: t,
            });

            output.message = 'Transit Slip Update Successful.';
            output.isSuccess = true;
            output.statusCode = 200;
            output.payload = {
                output: transitSlip,
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

async function getTransitSlipByTransitFrom(req) {
    const output = new ResponseDto();
    try {
        const result = await sequelize.transaction(async (t) => {
            const transitSlips = await TransitSlip.findAll({
                where: {
                    transit_from: req.body.transit_from,
                },
                order: [['id', 'desc']],
            });

            if (!transitSlips) {
                output.message = 'No Transit Slip exists by the given criteria.';
                output.statusCode = 409;
                return output;
            }

            output.message = 'List of transit slip by the given user';
            output.isSuccess = true;
            output.statusCode = 200;
            output.payload = {
                output: transitSlips,
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

async function getTransitSlipByTransitTo(req) {
    const output = new ResponseDto();
    const transitSlips = await TransitSlip.findAll({
        where: {
            transit_to: req.body.transit_to,
        },
        order: [['id', 'desc']],
    });

    if (!transitSlips) {
        output.message = 'No Transit Slip exists by the given criteria.';
        output.statusCode = 404;
        return output;
    }

    output.message = 'List of transit slip for the given user';
    output.isSuccess = true;
    output.statusCode = 200;
    output.payload = {
        output: transitSlips,
    };
    return output;
}

transitSlipRepository.create = async function (req, res) {
    const output = await createTransitSlip(req);
    res.status(output.statusCode);
    res.send(output);
};

transitSlipRepository.getById = async function (req, res) {
    const output = await getTransitSlipById(req);
    res.status(output.statusCode);
    res.send(output);
};

transitSlipRepository.getBySlipNo = async function (req, res) {
    const output = await getTransitSlipBySlipNo(req);
    res.status(output.statusCode);
    res.send(output);
};

transitSlipRepository.delete = async function (req, res) {
    const output = await deleteTransitSlipById(req);
    res.status(output.statusCode);
    res.send(output);
};

transitSlipRepository.update = async function (req, res) {
    const output = await updateTransitSlipById(req);
    res.status(output.statusCode);
    res.send(output);
};

transitSlipRepository.getAllByUser = async function (req, res) {
    const output = await getTransitSlipByTransitFrom(req);
    res.status(output.statusCode);
    res.send(output);
};

transitSlipRepository.getAllForUser = async function (req, res) {
    const output = await getTransitSlipByTransitTo(req);
    res.status(output.statusCode);
    res.send(output);
};
