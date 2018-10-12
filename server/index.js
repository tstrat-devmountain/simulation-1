const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(database => {
    app.set('db', database);
}) .catch( error => console.error("Trouble setting up connection to postgreSQL:", error));


const SERVER_PORT = process.env.PORT || 4000;
app.listen(SERVER_PORT, () => console.log("Listening on port:", SERVER_PORT));