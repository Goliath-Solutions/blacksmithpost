var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blacksmith');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var weaponSchema = mongoose.Schema({
  type: String,
  description: String,
  cost: Number,
  email: String,
  condition: String,
  blacksmith: String,
  material: String,
  imagemain: String,
  active: Boolean
});

var armorSchema = mongoose.Schema({
  type: String,
  description: String,
  cost: Number,
  email: String,
  condition: String,
  blacksmith: String,
  material: String,
  image: String,
  active: Boolean
});


var weapon = module.exports = mongoose.model('weapon', weaponSchema);
var armor = module.exports = mongoose.model('armor', armorSchema);


var createWeapon = function (data) {
  console.log('create weapon func starting')
    new weapon({
      type: data.type || "sword",
      description: data.description || "from the swamp of mordor",
      cost: data.cost || 999999,
      email: data.email || "gandalf@hotmail.com",
      condition: data.condition || "strong like bull",
      blacksmith: data.blacksmith || "hatori hanzo",
      material: data.material || "dragonsteel",
      yearbuilt: data.yearbuilt || 1750,
      image: data.image || "picture",
      active: true
    }).save().then(() => console.log("weapon created"));
  }


var searchWeapontype = function () {
   weapon.find();

}


var allWeapons = function(callback) {
  weapon.find(function(err, data) {
    if(err) {
      callback(err, data);
    } else {
      callback(err, data);
    }
  });
};


function allweapons(callback){

}




//async callbacks and promises




module.exports.allWeapons = allWeapons;
module.exports.createWeapon = createWeapon;
module.exports.searchWeapontype = searchWeapontype;