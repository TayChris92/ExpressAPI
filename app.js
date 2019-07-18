require('dotenv/config');
const express = require('express');
const userRoutes = require('./routes/users');
const rootRoutes = require('./routes/root');
var bodyParser = require('body-parser');
var cors = require('cors')

//App init
const app = express();
app.use(cors())

//Allows app to parse request body for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Load routes
app.use(userRoutes);
app.use(rootRoutes);

//Used with localhost switch because I hate editing .env or switching out variables
//whenever I want to switch to and from localhost
var connection;
if(process.env.LOCAL){
    connection = "localhost";
}else{
    connection = process.env.HOST_CONNECTION;
}

//Initialize server on port specified in .env
app.listen(process.env.HOST_PORT,connection);
console.log("API running on: http://" + connection + ":" + process.env.HOST_PORT) 