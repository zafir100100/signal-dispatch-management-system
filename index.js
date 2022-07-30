const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 8090;
var cors = require('cors');

app.use(cors());
app.use(express.json());

const PGHOST = 'localhost';
const PGDATABASE = 'signal_dispatch_handler';
const PGUSER = 'postgres';
const PGPASSWORD = 'postgres';

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    define: {
        timestamps: false
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user_info', {
    id: {
        type: Sequelize.INTEGER,
    },
    user_full_name: {
        type: Sequelize.STRING,
    },
    user_name: {
        type: Sequelize.STRING,
    },
    user_password: {
        type: Sequelize.STRING,
    },
    user_email: {
        type: Sequelize.STRING,
    },
    user_army_number: {
        type: Sequelize.STRING,
    },
    user_rank: {
        type: Sequelize.STRING,
    },
    user_role: {
        type: Sequelize.STRING,
    },
    user_serving_unit: {
        type: Sequelize.STRING,
    },
    user_status: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true,
});

User.sync({
    force: false
});

const DespatchEnvelop = sequelize.define('despatch_envelop', {
    id: {
        type: Sequelize.INTEGER,
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

const TransitSlip = sequelize.define('transit_slip', {
    id: {
        type: Sequelize.INTEGER,
    },
    transit_slip_no: {
        type: Sequelize.STRING,
    },
    transit_from: {
        type: Sequelize.STRING,
    },
    transit_to: {
        type: Sequelize.STRING,
    },
    transit_method: {
        type: Sequelize.STRING,
    },
    name_of_courier: {
        type: Sequelize.STRING,
    },
    transit_date: {
        type: Sequelize.STRING,
    }
}, {
    freezeTableName: true,
});

TransitSlip.sync({
    force: false
});

app.get('/', (req, res) => res.json({
    message: 'Hello World'
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));