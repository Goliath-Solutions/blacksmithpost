var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index.js');

var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/../client/dist'));



app.post('/api/createWeapon', function (req, res) {
  database.createWeapon(req.body)

  res.send('weapon created')
});


app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});

//request to view all items of type

app.get('/api/allWeapons', function (req, res) {
 database.allWeapons(function (err, data){
  if (err){
    res.sendStatus(500 +"cant find item");
  } else {
    res.json(data)
  }
 })
})


//request to add item to database

app.post('/api/weaponForm', function (req, res){
    console.log(req.body +" this req body");
  database.createWeapon(req.body);
    res.sendStatus(200);

})
/*
app.get('/api/allArmor', function (req, res) {})
app.post('/api/armorForm', function (req, res) {})
// request to view a single item
app.get('/api/singleArmor', function (req, res) {})
app.get('/api/singleWeapon', function (req, res) {})

// request to delete a single item made by owner of listing
app.delete('/api/removeWeapon', function (req, res) {})
app.delete('/api/removeArmor', function (req, res) {})

//request to update a single item made by owner of listing
app.update('/api/updateWeapon', function (req, res) {})
app.update('/api/updateArmor', function (req, res) {})

*/
