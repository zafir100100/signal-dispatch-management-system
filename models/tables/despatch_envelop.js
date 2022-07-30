const sequelize = require('../../utils/db-connection');
const Sequelize = require('sequelize');

const DespatchEnvelop = sequelize.define('despatch_envelop', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    letter_no: {
        type: Sequelize.STRING,
    },
    date_time_group: {
        type: Sequelize.STRING,
    },
    originator_no: {
        type: Sequelize.STRING,
    },
    from_address: {
        type: Sequelize.STRING,
    },
    to_address: {
        type: Sequelize.STRING,
    },
    precedance: {
        type: Sequelize.STRING,
    },
    time_of_receive: {
        type: Sequelize.STRING,
    },
    despatch_status: {
        type: Sequelize.STRING,
    },
    despatch_type: {
        type: Sequelize.STRING,
    },
    time_of_delivery: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true,
});

DespatchEnvelop.sync({
    force: false
});

module.exports = DespatchEnvelop;