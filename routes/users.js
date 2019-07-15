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
router.get('/users', function (req, res) {
        dao.getAllUsers().then((users) => {
                res.send(users);
        });
});
//Gets a single user
router.get('/users/:id', (req, res) => {
        const id = req.params.id;
        dao.getSingleUser(id).then(user => {
                res.send(user);
        });
})
//Posts a new user, must provide JSON
router.post('/users', (req, res) => {
        dao.postUser(req, res);
});
//Deletes a user by UserID
router.delete('/users/:id', (req, res) => {
        const id = req.params.id;
        console.log(id);
        dao.deleteUser(id);
        console.log("User deleted!");
});
//Updates a user, must provide JSON of new values and the ID of user to update
router.patch('/users/:id', (req, res) => {
        const id = req.params.id;
        var user = req.body;
        dao.updateUser(user, id);
});

module.exports = router;