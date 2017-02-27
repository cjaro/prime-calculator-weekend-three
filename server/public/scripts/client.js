// console.log('ready to jquery');

var values = {};

$(document).ready(function(){

  $('#addition').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'addition';
    if(values.type == 'addition'){
      additionTest();
      // console.log(additionTest);
    }
  });

  $('#subtraction').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'subtraction';
    if(values.type == 'subtraction'){
      subtractionTest();
      // console.log(subtractionTest);
    }
  });

  $('#multiplication').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'multiplication';
    if(values.type == 'multiplication'){
      multiplicationTest();
      // console.log(multiplicationTest);
    }
  });

  $('#division').on('click', function(){
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'division';
    if(values.type == 'division'){
      divisionTest();
      // console.log(divisionTest);
    }
  });

  function additionTest(){
    $.ajax({
      url: '/addition',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    }); //ends ajax
  }

  // values.type = 'subtraction';
  // subtractionTest();
  function subtractionTest(){
    $.ajax({
      url: '/subtraction',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    }); //ends ajax
  }

  // values.type == 'multiplication';
  // multiplicationTest();
  function multiplicationTest(){
    $.ajax({
      url: '/multiplication',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    }); //ends ajax
  }

  // values.type == 'division';
  // divisionTest();
  function divisionTest(){
    $.ajax({
      url: '/division',
      type: 'POST',
      data: values,
      success: function(response){
        answerOnDom(response);
      }
    }); //ends ajax
  }
  // console.log('math is working');

});//ends doc ready

function answerOnDom(answer){
  $('#showAnswer').text(answer);
}

$('#clear').on('click', function(){
  $('#showAnswer').text("");
});
// $('#numberContainer').on('click', function(){
// var newOFishbject = {};
// newFishObject.name = $('#newFishName').val();
// $.ajax({
//   type: 'POST',
//   url: '/fish/new',
//   data: newFishObject,
//   success: function(response){
// console.log(response);
//     getFishData();
//   }
// }); //ends success response fxn
