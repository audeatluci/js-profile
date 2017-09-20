var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var User = require('./UserModel.js');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//Mongoose stuff
mongoose.connect('mongodb://172.17.0.1:27017/database');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 // we're connected!
});

//Delete from here to where we state 'END DELETION'
var user1 = new User({
  firstName: 'Pontus',
  lastName: 'Ekhem',
  age: 26,
  nationality: 'Swedish'
});

user1.save(function (err, user1) {
  if (err) return console.error(err);
});

var user2 = new User({
  firstName: 'Akram',
  lastName: 'Ted',
  age: 25,
  nationality: 'British'
});

user2.save(function (err, user2) {
  if (err) return console.error(err);
});

var user3 = new User({
  firstName: 'Nick',
  lastName: 'Thomas',
  age: 32,
  nationality: 'Danish'
});

user3.save(function (err, user3) {
  if (err) return console.error(err);
});

//END DELETION

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function() {
   console.log('Started on port 3000');
});

module.exports = app;
