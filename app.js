const express = require('express');
const userRoute = require('./routes/users');
const rootRoute = require('./routes/root');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv/config');

const app = express();

app.use(cors())

//Allow app to parse request body for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Load routes
app.use(userRoute);
app.use(rootRoute);

//Initialize server on port specified in .env
app.listen(process.env.HOST_PORT);