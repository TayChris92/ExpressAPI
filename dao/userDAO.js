require('dotenv/config');
const UserModel = require('../models/User');
const Sequelize = require('sequelize');
var User;
var sqcon;

init();

async function init() {
    sqcon = new Sequelize({
        dialect: 'sqlite',
        storage: process.env.DB_CONNECTION_SQLITE
    });
    await sqcon.authenticate();
    User = UserModel(sqcon, Sequelize);
    console.log("Sequelize connection was successful.");
}

//Retrieves list of all users
getAllUsers = function () {
    return User.findAll({
        raw: true
    });
}

//Retrieves a single user
getSingleUser = function (id) {
    return User.findOne({
        raw: true,
        where: Sequelize.where(
            Sequelize.fn("lower", Sequelize.col("userID")),
            Sequelize.fn("lower", id)
        )
    });
}

//Creates a user
postUser = function (user) {
    User.create(user);
}

//Deletes a user
deleteUser = function (id) {
    User.destroy({
        where: {
            userID: id
        }
    });
}

//Updates a user
updateUser = function (user, id) {
    User.update(user, {
        where: {
            userID: id
        },
        returning: true,
        plain: true
    });
}

module.exports = {
    getAllUsers,
    getSingleUser,
    postUser,
    deleteUser,
    updateUser
}