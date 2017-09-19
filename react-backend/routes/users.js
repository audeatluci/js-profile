let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/');
var User = require('./../UserModel.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = User.find(function (err, userData) {
    if (err) return console.error(err);
    console.log(userData);
    return res.json(userData);
  });

  return users;
});

router.get('/:userId', function(req, res, next) {
  let user = User.find({ _id: req.params.userId }, function (err, userData) {
    if (err) return console.error(err);
    console.log(userData);
    return res.json(userData);
  });

  return user;
});

module.exports = router;