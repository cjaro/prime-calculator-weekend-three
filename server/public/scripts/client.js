console.log('ready to jquery');

var values = {};
// var urlMath =

$(document).ready(function(){

  $('.operation').on('click', function() {
    values.a = $('#firstNumber').val();
    values.b = $('#secondNumber').val();
    values.type = 'addition';
      additionTest();
    values.type = 'subtraction';
      subtractionTest();
      values.type = 'multiplication';
      multiplicationTest();
    values.type = 'division';
      divisionTest();

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
           result(response);
        }
     }); //ends ajax
    }

    function divisionTest(){
      $.ajax({
        url: '/division',
        type: 'POST',
        data: values,
        success: function(response){
           result();
        }
     }); //ends ajax
    }

  });

  // var result = function(){
  //     $('#answer').append(response);
  // };

  // $('#clearAnswer').on('click', function(){
  //   $('span').text("");
  // });
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
