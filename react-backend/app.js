var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');

var app = express();

//Mongoose stuff
mongoose.connect('mongodb://127.0.0.1:27017/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 // we're connected!
});

var userSchema = mongoose.Schema({
  name: String
});

var User = mongoose.model('User', userSchema);

var pontusVariable = new User({ name: 'Pontus' });
console.log(pontusVariable.name);

pontusVariable.save(function (err, pontusVariable) {
  if (err) return console.error(err);
 });
 
 var User = mongoose.model('User', userSchema);
 
 User.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
 })

var user2 = new User({ name: 'Akram' });

user2.save(function (err, user2) {
  if (err) return console.error(err);
 });


 User.find(function (err, users) {
  if (err) return console.error(err);
  console.log(users);
 })


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

module.exports = app;
