var mongoServer = 'mongodb://localhost:27017/personDB';

var mongoose = require('mongoose');

mongoose.connect(mongoServer);


var Schema = mongoose.Schema;

// create a schema
var personSchema = new Schema({
  firstName: { type: String, required: true, unique: true },
  lastName : { type: String, required: true },
  location: String,  
  created_at: Date,
  updated_at: Date
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;

