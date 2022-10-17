var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', (req, res) => {
  StudentModel.find((err, data) => {
    if (!err) {
      res.json(data);
    }
  })
})

module.exports = router;
