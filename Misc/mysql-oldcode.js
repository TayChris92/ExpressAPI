var mysql = require('mysql');

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

var con = mysql.createConnection({
    host: process.env.DB_CONNECTION,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});


var conAlt = mysql.createConnection({
    host: process.env.DB_CONNECTION,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'api'
});