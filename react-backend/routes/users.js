let express = require('express');
let router = express.Router();

let dummyData = [{
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
  age: 35
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.json(dummyData);
});

router.get('/:userId', function(req, res, next) {
  let user = dummyData.filter(user => {
    return user.id.toString() === req.params.userId.toString();
  });
  return res.json(user);
});

module.exports = router;