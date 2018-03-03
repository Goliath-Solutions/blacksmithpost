var fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blacksmith');

var db = mongoose.connection;




db.collection('weapons').drop();



//creates new collection of weapons with data loated in data.json
var docs = fs.readFile('predata.json', 'utf8', function (err, data) {
  var weapons = db.collection('weapons');
  console.log(data)
  weapons.insert(JSON.parse(data), function (err, docs) {
    weapons.count(function (err, count) {
      console.log(count + "[" + data + "]");
      db.close();
    });
  });
});