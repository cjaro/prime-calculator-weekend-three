var express = require('express');
var app = express();
var bodyParser = require('body-parser');



var port = 5000;

// var calculate = function(equation){
//   var firstNumber = parseInt(equation.firstNumber);
//   var secondNumber = parseInt(equation.secondNumber);
//
//           return addition(firstNumber,secondNumber);
//       //subtration
//           return subtraction(firstNumber,secondNumber);
//       // multiplication
//           return multiplication(firstNumber,secondNumber);
//       // division
//           return division(firstNumber,secondNumber);
// }
// };

app.use(express.static('server/public')); //is this request for static files?
app.use(bodyParser.urlencoded({extended: true})); //this creates req.body
// app.use();


// needs an on click for pressing the buttons to add stuff up

app.post('/addition', function(req,res){
    var answer = req.body;
    res.send(answer);
});






console.log('listening on port', port);
app.listen(port);
