const express = require('express');
const app = express();
const port = 9999;
const models = require("./models");
const cors = require("cors")

app.use(cors);



models.sequelize.sync().then(()=>
    app.listen(port, function () {
        console.log(`server listening on port ${port}!`);
    }))

