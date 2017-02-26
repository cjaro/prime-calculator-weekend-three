console.log('ready to jquery');

var values = {};

$(document).ready(function(){

  $('#operations').on('click','.operation', function(event) {
    event.preventDefault(event);
    values.operation = this.dataset.operation;
    console.log("el clic funciona!");

    $.ajax({
      url: '/',
      type: 'POST',
      data: values,
      success: function(response){
         answerOnDom(response.value);
      }
   }); //ends ajax



  });

  $('#clear').on('click', function(){
    $('#answer').children('span').text("");
  });
  // $('#numberContainer').on('click', function(){
      // var newFishObject = {};
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

}); //ends doc ready

var addition = function(a,b){
  return a + b;
};
var subtraction = function(a,b){
  return a - b;
};
var multiplication = function(a,b){
    return a * b;
};
var division = function(a,b){
  return a / b;
};

function answerOnDom(answer){
    $('#answer').children('span').text(answer);
}
