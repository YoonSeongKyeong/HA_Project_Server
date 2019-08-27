const express = require('express');
const app = express();
const port = 9999;
const models = require("./models");
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(cors);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

models.sequelize.sync().then(()=>
    app.listen(port, function () {
        console.log(`server listening on port ${port}!`);
    }))

