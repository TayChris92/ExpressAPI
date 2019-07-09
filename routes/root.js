const express = require('express');
const router = express.Router();

module.exports = router.get('/', function (req, res) {
    res.send('We are on root');
});
