const express = require('express');
const morgan = require('morgan');
const router = require('./Routes/router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

module.exports = app;
