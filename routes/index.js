var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

router.get('/', (req, res, next) => {
  StudentModel.find((err, data) => {
    if (!err) {
      res.json(data);
    }
  })
})

module.exports = router;
