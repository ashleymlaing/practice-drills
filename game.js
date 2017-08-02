

$(document).ready(function(){
  var waitingToPlay;
  var playerScore = 0;
  var comptScore = 0;

  $('aside').hide();
  $('div').hide();
  $('.playerScore').append(playerScore);
  $('.compScore').append(comptScore);
  $('.stop').hide();
  $('.circle').show();
  $('.start').on('click',function(){
    $('div').show();
    $('.start').hide();
    $('.stop').show();
    alert("Guess where the pink ball went");
    $('aside').show();
    setTimeout(function(){
      $('.circle').hide();

      alert("Where did the ball go?");
    },2000);
    setTimeout(function(){
      $('div').css('animation', 'single_rotate 3s linear reverse');
    },6000);
  });


  $('div').on('click',function(){
    $(this).addClass('picked');
    var winner = Math.round(Math.random()*100);
    //console.log(winner);
    if(winner <= 33){
      $('div').css('background-color','yellow');
      $(this).css('background-color','purple');
      $('.circle').css('margin-left','0px').show();
      if($('#spotOne').hasClass('picked')){
        $('#spotOne').css('background-color','lightgreen');
        playerScore++;
        $('.playerScore').empty();
        $('.playerScore').append("<p>Your Score</p>" + playerScore);
      }else{
        comptScore++;
        $('.compScore').empty();
        $('.compScore').append("<p>Comp Score</p>"+comptScore);
      }
      setTimeout(function(){
        $('div').css('background-color','yellow');
        $('.circle').hide();
        $('div').removeClass('picked');
      },2000);
    }else if(winner> 33 && winner <= 66){
      $('div').css('background-color','yellow');
      $(this).css('background-color','purple');
      $('.circle').css('margin-left','30%').show();
      if($('#spotTwo').hasClass('picked')){
        $('#spotTwo').css('background-color','lightgreen');
        playerScore++;
        $('.playerScore').empty();
        $('.playerScore').append("<p>Your Score</p>" + playerScore);
      }else{
        comptScore++;
        $('.compScore').empty();
        $('.compScore').append("<p>Comp Score</p>"+comptScore);
      }
      setTimeout(function(){
        $('div').css('background-color','yellow');
        $('.circle').hide();
        $('div').removeClass('picked');
      },2000);
    }else if(winner> 66 && winner <= 100){
      $('div').css('background-color','yellow');
      $(this).css('background-color','purple');
      $('.circle').css('margin-left','60%').show();
      if($('#spotThree').hasClass('picked')){
        $('#spotThree').css('background-color','lightgreen');
        playerScore++;
        $('.playerScore').empty();
        $('.playerScore').append("<p>Your Score</p>" + playerScore);
      }else{
        comptScore++;
        $('.compScore').empty();
        $('.compScore').append("<p>Comp Score</p>"+comptScore);
      }
      setTimeout(function(){
        $('div').css('background-color','yellow');
        $('.circle').hide();
        $('div').removeClass('picked');
      },2000);
    }
    setInterval(function(){
      setTimeout(function(){
        $('div').css('animation', 'single_rotate 3s linear reverse');
      },6000);
    },3000);
  });
  $('.stop').on('click',function(){
    $('div').hide();
    $('.start').show();
    $('.stop').hide();
  });
});
