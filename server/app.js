var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var values = {};

var port = 5000;

app.use(express.static('server/public')); //is this request for static files?
app.use(bodyParser.urlencoded({extended: true})); //this creates req.body

app.post('/addition', function(req,res){
  var values = req.body;
  console.log(values);
  var addTotal = parseFloat(values.a) + parseFloat(values.b);
    res.send(addTotal + '');
});

app.post('/subtraction', function(req,res){
  var values = req.body;
  console.log(values);
  var subtractTotal = values.a - values.b;
    res.send(subtractTotal + '');
  });

app.post('/multiplication', function(req,res){
  var values = req.body;
  console.log(values);
  var multiplyTotal = values.a * values.b;
    console.log(multiplyTotal + '');
});

app.post('/division', function(req,res){
  var values = req.body;
  console.log(values);
  var divideTotal = parseFloat(values.a) / parseFloat(values.b);
    res.send(divideTotal + '');
  });

// else {
//
// } else {
//
// } else {
//
// }



// function subtraction(){
//   var subtractTotal = math.a - math.b;
//   return subtractTotal + '';
// }
// function multiplication(){
//   return math.a * math.b;
// }
// function division(){
//   return math.a / math.b;
// }


console.log('listening on port', port);
app.listen(port);





// var calculate = function(equation){
//   var firstNumber = parseInt(equation.firstNumber);
//   var secondNumber = parseInt(equation.secondNumber);
// };
