  var playerScore = 0;
  var comptScore = 0;
var gamePlaying = null;
var gameMessage = null;

function movingBox(){
  var randomMove = Math.round(Math.random()* (3 - 1) + 1);
  console.log(randomMove);
  if(randomMove == 1 ){
    $('#spotThree').removeClass('box');
    $('#spotOne').removeClass('box');
    $('#spotTwo').removeClass('box');
    $('#spotThree').removeClass('boxLeft');
    $('#spotOne').removeClass('boxLeft');
    $('#spotTwo').removeClass('boxLeft');

      // if($('#spotOne').css('left')>$('#spotTwo').css('left')){
      //   $('#spotOne').addClass('boxLeft');
      //   $('#spotTwo').addClass('box');
      // }else{
      //   $('#spotOne').addClass('box');
      //   $('#spotTwo').addClass('boxLeft');
      // }
    if($('#spotOne').css('left')=="30%"){
      if($('#spotTwo').css('left')=="43%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "43%";
        document.getElementById('spotTwo').style.left = "30%";
        document.getElementById('spotThree').style.left='55%';
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "55%";
        document.getElementById('spotTwo').style.left = "30%";
        document.getElementById('spotThree').style.left='43%';
      }
    }else if ($('#spotOne').css('left')=="43%") {
      if($('#spotTwo').css('left')=="30%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "30%";
        document.getElementById('spotTwo').style.left = "43%";
        document.getElementById('spotThree').style.left='55%';
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "55%";
        document.getElementById('spotTwo').style.left = "43%";
        document.getElementById('spotThree').style.left='30%';
      }
    }else{
      if($('#spotTwo').css('left')=="30%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "30%";
        document.getElementById('spotTwo').style.left = "55%";
        document.getElementById('spotThree').style.left='43%';
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "43%";
        document.getElementById('spotTwo').style.left = "30%";
        document.getElementById('spotThree').style.left='55%';
    }
    }

  }else if(randomMove == 2){

    $('#spotThree').removeClass('box');
    $('#spotOne').removeClass('box');
    $('#spotTwo').removeClass('box');
    $('#spotThree').removeClass('boxLeft');
    $('#spotOne').removeClass('boxLeft');
    $('#spotTwo').removeClass('boxLeft');

      // if($('#spotOne').css('left')>$('#spotThree').css('left')){
      //   $('#spotOne').addClass('boxLeft');
      //   $('#spotThree').addClass('box');
      // }else{
      //   $('#spotOne').addClass('box');
      //   $('#spotThree').addClass('boxLeft');
      // }

    if($('#spotOne').css('left')=="30%"){
      if($('#spotThree').css('left')=="43%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "43%";
        document.getElementById('spotThree').style.left = "30%";
        document.getElementById('spotTwo').style.left = "55%";
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "55%";
        document.getElementById('spotThree').style.left = "30%";
        document.getElementById('spotTwo').style.left = "43%";
      }
    }else if ($('#spotOne').css('left')=="43%") {
      if($('#spotThree').css('left')=="30%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "30%";
        document.getElementById('spotThree').style.left = "43%";
        document.getElementById('spotTwo').style.left = "55%";
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "55%";
        document.getElementById('spotThree').style.left = "43%";
        document.getElementById('spotTwo').style.left = "30%";
      }
    }else{
      if($('#spotThree').css('left')=="30%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "30%";
        document.getElementById('spotThree').style.left = "55%";
        document.getElementById('spotTwo').style.left = "43%";
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotOne').style.left = "43%";
        document.getElementById('spotThree').style.left = "30%";
        document.getElementById('spotTwo').style.left = "55%";
    }
    }


  }else if (randomMove == 3) {
    $('#spotThree').removeClass('box');
    $('#spotOne').removeClass('box');
    $('#spotTwo').removeClass('box');
    $('#spotThree').removeClass('boxLeft');
    $('#spotOne').removeClass('boxLeft');
    $('#spotTwo').removeClass('boxLeft');

      // if($('#spotTwo').css('left')>$('#spotThree').css('left')){
      //   $('#spotTwo').addClass('boxLeft');
      //   $('#spotThree').addClass('box');
      // }else{
      //   $('#spotTwo').addClass('box');
      //   $('#spotThree').addClass('boxLeft');
      // }

    if($('#spotTwo').css('left')=="30%"){
      if($('#spotThree').css('left')=="43%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotTwo').style.left = "43%";
        document.getElementById('spotThree').style.left = "30%";
        document.getElementById('spotOne').style.left = "55%";
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotTwo').style.left = "55%";
        document.getElementById('spotThree').style.left = "30%";
        document.getElementById('spotOne').style.left = "43%";
      }
    }else if ($('#spotTwo').css('left')=="43%") {
      if($('#spotThree').css('left')=="30%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotTwo').style.left = "30%";
        document.getElementById('spotThree').style.left = "43%";
        document.getElementById('spotOne').style.left = "55%";
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotTwo').style.left = "55%";
        document.getElementById('spotThree').style.left = "43%";
        document.getElementById('spotOne').style.left = "30%";
      }
    }else{
      if($('#spotThree').css('left')=="30%"){
        $('div').css('transition', 'left 5s');
        document.getElementById('spotTwo').style.left = "30%";
        document.getElementById('spotThree').style.left = "55%";
        document.getElementById('spotOne').style.left = "43%";
      }else{
        $('div').css('transition', 'left 5s');
        document.getElementById('spotTwo').style.left = "43%";
        document.getElementById('spotThree').style.left = "30%";
        document.getElementById('spotOne').style.left = "55%";
    }
    }

  }else {
    $('#spotThree').removeClass('box');
    $('#spotOne').removeClass('box');
    $('#spotTwo').removeClass('box');
    $('#spotThree').removeClass('boxLeft');
    $('#spotOne').removeClass('boxLeft');
    $('#spotTwo').removeClass('boxLeft');
  }

};


$(document).ready(function(){

  $('.playerScore').append(playerScore);
  $('.compScore').append(comptScore);

  $('div').removeClass('box');
  $('div').removeClass('boxLeft');
  $('.start').on('click',function(){
    $('div').css('top','12%').css('transition', "top 5s");
    $('#spotTwo').addClass('winningSpot');
    gamePlaying = setInterval(function(){
        $('.circle').hide();
        for(var i = 0;i<=10;i++){
          setTimeout(function(){
            movingBox();
          },2000);
        }
      },12000);
    gameMessage = setInterval(function(){
      alert('Find the Ball!\nPick a box that you believe has the ball.');
      $('div').css('background-color','orange');
    },16000);
  });
  $('div').on('click',function winnerLoser() {
    clearTimeout(gameMessage);
    $(this).addClass('picked');
    if($('#spotTwo').css('left')=='30%'){
      $('.circle').css('margin-left',"10%");
    }else if($('#spotTwo').css('left')=='43%'){
      $('.circle').css('margin-left',"36%");
    }else if($('#spotTwo').css('left')=='55%'){
      $('.circle').css('margin-left',"50%");
    }
    $('.circle').show();
    setTimeout(function() {
      $('.circle').hide();
    },4000);
    if($(this).hasClass('picked')==true && $(this).hasClass('winningSpot')==true){
      alert("Winner!!!");
      playerScore++;
        $('.playerScore').empty();
        $('.playerScore').append("<p>Your Score</p>" + playerScore);
      $('div').removeClass('picked').css('background-color','yellow');

    }else{
      alert("Try again!");
      comptScore++;
      $('.compScore').empty();
      $('.compScore').append("<p>Comp Score</p>"+comptScore);
      if($('#spotTwo').css('left')=='30%'){
        $('.circle').css('margin-left',"10%");
      }else if($('#spotTwo').css('left')=='43%'){
        $('.circle').css('margin-left',"36%");
      }else if($('#spotTwo').css('left')=='55%'){
        $('.circle').css('margin-left',"50%");
      }
      $('.circle').show();
      setTimeout(function() {
        $('.circle').hide();
      },2000);
      $('div').removeClass('picked');

    }
  });
  $('.stop').on('click',function(){
    $('.circle').show();
    $('div').css('top','40%');
    clearInterval(gamePlaying);
  });
});
