var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blacksmith');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var weaponSchema = mongoose.Schema({
  type: Number,
  description: String,
  cost: Number,
  email: String,
  condition: String,
  blacksmith: String,
  material: String,
  origin: String,
  yearbuilt: String,
  imagemain: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  location: String,
  active: Boolean
});

var armorSchema = mongoose.Schema({
  type: Number,
  description: String,
  cost: Number,
  email: String,
  condition: String,
  blacksmith: String,
  material: String,
  origin: String,
  yearbuilt: String,
  imagemain: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  location: String,
  active: Boolean
});


var weapon = mongoose.model('weapon', weaponSchema);


var armor = mongoose.model('armor', armorSchema);


module.exports.selectAll = selectAll;