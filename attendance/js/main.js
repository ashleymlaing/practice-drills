$(document).ready(function(){

  $('button').on('click',addingStudent(){
    var name = $('input').val();
    $('.students').append("<li>" + name + "</li");
  });

});
