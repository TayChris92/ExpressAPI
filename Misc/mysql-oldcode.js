//This is old code used to get mysql connected and running successful queries

//This is the main dependency import
var mysql = require('mysql');

//This function executes a query to the database which returns all users
//It returns a promise which is then referenced from the user routes module
var getAllUsers = function () {

    return new Promise(function (resolve, reject) {

        var query = "SELECT * FROM users";
        var returner = "";

        con.query(query, function (error, users) {
            if (error) {
                returnValue = "";
                throw error;
            } else {
                returner = users;
            }
            resolve(returner);
        });
    });
}
//This is the connection being instantiated
var con = mysql.createConnection({
    host: process.env.DB_CONNECTION,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

//This is exactly the same as the method above except it includes extra parameters
//in the options object
var conAlt = mysql.createConnection({
    host: process.env.DB_CONNECTION,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'api'
});