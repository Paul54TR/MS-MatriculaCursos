const express = require('express');

const app = express();
const apiv1route = require('./v1/apiv1route');

//  dominio.../api/v1/
app.use('/v1',apiv1route);

module.exports = app;