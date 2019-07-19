require('dotenv/config');
const express = require('express');
const userRoutes = require('./routes/users');
const bodyParser = require('body-parser');
const cors = require('cors');

var connection;

appInit();

function appInit() {
    //Main App Init
    const app = express();

    //Used for cross origin
    app.use(cors());

    //Allows app to parse request body for json
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //Load routes
    app.use(userRoutes);

    //LocalHost switch
    if (process.env.LOCAL) {
        connection = "localhost";
    } else {
        connection = process.env.HOST_CONNECTION;
    }

    //Initialize server on port specified in .env
    app.listen(process.env.HOST_PORT, connection);
    console.log("API running on: http://" + connection + ":" + process.env.HOST_PORT)
}