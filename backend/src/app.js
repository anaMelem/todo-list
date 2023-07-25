const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.get('/', (request, response) =>response.status(200).send('Olá, Mundo!') )


module.exports = app;