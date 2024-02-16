var express = require('express');
const Joi = require('joi');

const {
  getWeight,
  getWeight1,
  getWeight2,
} = require('../controller/weight/controller/weight.controller');
var router = express.Router();

// get all MsSales
router.get('/1', getWeight);
router.get('/2', getWeight1);
router.get('/3', getWeight2);

module.exports = router;
