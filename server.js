const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors')
const bodyParser = require("body-parser");
const Routes = require('./src/api/routes');
const db = require('./src/api/models');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 3500;

app.use('/api', Routes);
app.use(express.static('./build'))
// app.set('view engine', 'pug');

app.get('*', (req, res) => {
    res.sendFile('./build/index.html', { root: __dirname })
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server running in ${port}`);
    });
})