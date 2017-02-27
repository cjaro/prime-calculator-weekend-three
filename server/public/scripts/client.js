console.log('ready to jquery');

var values = {};
// var urlMath =

$(document).ready(function(){

  $('.operation').on('click', function() {
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();

    if(values.type = 'addition'){
      additionTest();
    } else if (values.type = 'subtraction'){
      subtractionTest();
    } else if (values.type = 'multiplication'){
      multiplicationTest();
    } else if (values.type = 'division'){
      divisionTest();
    }

    console.log("el clic funciona!");

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

  });

  function answerOnDom(){
      $('#answer').children('span').text();
  }

  $('#clear').on('click', function(){
    $('#answer').children('span').text("");
  });
  // $('#numberContainer').on('click', function(){
      // var newObject = {};
      // newObject.name = $('#newName').val();
      // $.ajax({
      //   type: 'POST',
      //   url: '/fish/new',
      //   data: newFishObject,
      //   success: function(response){
          // console.log(response);
      //     getFishData();
      //   }
    // }); //ends success response fxn

}); //ends doc ready
