var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
   firstName: String,
   lastName: String,
   nationality: String,
   age: Number
});

module.exports = mongoose.model('User', userSchema);