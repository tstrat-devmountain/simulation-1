const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());


const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log("Listening on port:", SERVER_PORT));