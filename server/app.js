var express = require('express');
var app = express();
var port = 5000;

$(document).ready(function(){
  $.ajax({
    url: '/',
    type: 'POST',
    data: values,
    success: function(response){
    answerOnDom(response.value);
    }
  });

// needs an on click for pressing the buttons to add stuff up


});

console.log('listening on port', port);

app.listen(port);
