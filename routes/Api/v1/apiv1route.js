const express = require('express');

const app = express();
const courseRoutes = require('./cursos/courseRoute');

//  dominio.../api/v1/course/
app.use('/course',courseRoutes);

module.exports = app;