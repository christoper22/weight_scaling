const express = require('express');
const router = express.Router();
const weight = require('./weight.route');

router.use('/weight', weight);

module.exports = router;
