require('dotenv/config');
var dao = require('../dao/userDAO');
var express = require('express');

//Instantiate router
const router = express.Router();
//Allow cross origin communication between front end and api
router.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

//Gets list of all users
router.get('/users', async (req, res) => {
        var users = await dao.getAllUsers();
        if (users) {
                console.log(users);
                res.send(users);
        } else {
                console.log("No users were found!");
                res.status(404).send("No users were found!");
        }
});

//Gets a single user
router.get('/users/:id', async (req, res) => {
        const id = req.params.id;
        var user = await dao.getSingleUser(id);
        if (user) {
                console.log(user);
                res.send(user);
        }else{
                console.log("No user with userID " + id + " was found.");
                res.status(404).send("No user with userID " + id + " was found!");
        }
})

//Posts a new user, must provide JSON
router.post('/users', (req, res) => {
        var user = req.body;
        dao.postUser(user);
        console.log("User created: " + user.userID);
});

//Deletes a user by UserID
router.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        dao.deleteUser(id);
        console.log("User " + id + " deleted!");
});

//Updates a user, must provide JSON of new values and the ID of user to update
router.patch('/users/:id', (req, res) => {
        const id = req.params.id;
        var user = req.body;
        dao.updateUser(user, id);
        console.log("User " + user.userID + " updated!");
        console.log("Updated values: " + user);
});

module.exports = router;