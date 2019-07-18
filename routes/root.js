const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('We are on root');
});

module.exports = router;