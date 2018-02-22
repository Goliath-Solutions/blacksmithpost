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



app.get('/api/showWeapons', function (req, res) {
 database.allWeapons(function (err, data){
  if (err){
    res.sendStatus(500 +"cant find item");
  } else {
    res.json(data)
  }
 })
})




// needs work on, where do I put database to link to mongodb?
app.post('/api/weaponForm', function (req, res){
    console.log(req.body +" this req body");
  database.createWeapon(req.body);
    res.sendStatus(200);

})








//app.get('/api/showWeapons', function (req, res) {
//  res.end(database.searchWeapontype())
//});