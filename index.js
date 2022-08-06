const express = require('express');

const app = express();
const port = 8090;
const cors = require('cors');
const userService = require('./controllers/user-info-controller');
const transitSlipService = require('./controllers/transit-slip-controller');
const despatchEnvelopService = require('./controllers/despatch-envelop-controller');
const despatchEnvelopDistributionService = require('./controllers/despatch-envelop-distribution-controller');
const transitSlipDistributionService = require('./controllers/transit-slip-controller');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({
        message: 'Hello World',
    }),
);

app.post('/create-user');

app.use(userService);

app.use(transitSlipService);

app.use(despatchEnvelopService);

app.use(despatchEnvelopDistributionService);

app.use(transitSlipDistributionService);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
