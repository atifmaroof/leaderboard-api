const express = require('express');
const app = express();
const UserController = require('./../controller/UserController')

app.post('/create', UserController.create);
app.put('/updateById', UserController.update);
app.get('/get', UserController.get);
app.delete('/delete/:id', UserController.delete);

module.exports = app;