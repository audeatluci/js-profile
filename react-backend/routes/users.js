var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
    username: "samsepi0l",
    name: "John",
    lastName: "Smith",
    nationality: "English",
    age: 23
  }, {
  	id: 2,
    username: "D0loresH4ze",
    name:"Dolores",
    lastName: "Hamilton",
    nationality:"Scottish",
    age: 67
  },{
    id: 3,
    username: "samiiuuuiupi0l",
    name:"Oscar",
    lastName: "De la Renta",
    nationality:"Venezuelan",
    age:    35
  }]);
});

module.exports = router;