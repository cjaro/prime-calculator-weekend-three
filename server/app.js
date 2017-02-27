var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var values = {};

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/addition', function(req,res){
  values = req.body;
  var addTotal = parseFloat(values.a) + parseFloat(values.b);
  res.send(addTotal + '');
});

app.post('/subtraction', function(req,res){
  values = req.body;
  var subtractTotal = values.a - values.b;
  res.send(subtractTotal + '');
});

app.post('/multiplication', function(req,res){
  values = req.body;
  var multiplyTotal = values.a * values.b;
  res.send(multiplyTotal + '');
});

app.post('/division', function(req,res){
  values = req.body;
  var divideTotal = values.a / values.b;
  res.send(divideTotal + '');
});

console.log('listening on port', port);
app.listen(port);
