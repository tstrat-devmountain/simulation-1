const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

/*  SETUP */

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(database => {
    app.set('db', database);
}) .catch( error => console.error("Trouble setting up connection to postgreSQL:", error));


/* ENDPOINTS */
app.get('/api/inventory', controller.getProducts);

app.post('/api/product', controller.createProduct);

app.get('/api/product/:id', controller.getProduct);
app.put('/api/product/:id', controller.updateProduct);
app.delete('/api/product/:id', controller.deleteProduct);

const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () => console.log("Listening on port:", SERVER_PORT));