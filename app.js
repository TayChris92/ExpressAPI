const express = require('express');
const userRoute = require('./routes/users');
const rootRoute = require('./routes/root');
var bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(userRoute);
app.use(rootRoute);

app.listen(process.env.HOST_PORT);

//Important Info!

//MIDDLEWARES
//Middleware allows us to run specific functions whenever a URL is accessed