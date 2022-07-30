const express = require('express');
const app = express();
const port = 8090;
const cors = require('cors');
const userInfoService = require('./controllers/user-info-controller');
const transitSlipService = require('./controllers/transit-slip-controller');
const despatchEnvelopService = require('./controllers/despatch-envelop-controller');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({
    message: 'Hello World'
}));

app.use(userInfoService);
app.use(despatchEnvelopService);
app.use(transitSlipService);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));