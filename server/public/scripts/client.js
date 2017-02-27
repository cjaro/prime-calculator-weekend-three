// console.log('ready to jquery');

var values = {};

$(document).ready(function(){

  $('#addition').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'addition';
    if(values.type == 'addition'){
      additionTest();
    }
  });

  $('#subtraction').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'subtraction';
    if(values.type == 'subtraction'){
      subtractionTest();
    }
  });

  $('#multiplication').on('click', function(){
    console.log('button multiply clicked');
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'multiplication';
    if(values.type == 'multiplication'){
      multiplicationTest();
      console.log(multiplicationTest);
    }
  });

  $('#division').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'division';
    if(values.type == 'division'){
      divisionTest();
    }
  });

  $('#clear').on('click', function(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#showAnswer').text('');
  });

  function additionTest(){
    $.ajax({
      url: '/addition',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    });
  }

  function subtractionTest(){
    $.ajax({
      url: '/subtraction',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    });
  }

  function multiplicationTest(){
    $.ajax({
      url: '/multiplication',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    });
  }

  function divisionTest(){
    $.ajax({
      url: '/division',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    });
  }

});//ends doc ready

function answerOnDom(answer){
  $('#showAnswer').text(answer);
}
