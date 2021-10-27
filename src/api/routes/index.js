
const express = require('express');
const app = express();
const UserRoute = require('./UserRoute');

app.get('/', (req, res) => { }).use('/user', UserRoute);

module.exports = app;