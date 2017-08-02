//
// $(document).ready(function(){
//   var playerScore = 0;
//   var comptScore = 0;
//
//   $('aside').hide();
//   $('div').hide();
//   $('.playerScore').append(playerScore);
//   $('.compScore').append(comptScore);
//   $('.stop').hide();
//   $('.circle').show();
//   setInterval(function(){
//       $('div').css('animation', 'single_rotate 3s linear reverse');
//     },6000);
//   $('.start').on('click',function(){
//     $('div').show();
//     $('.start').hide();
//     $('.stop').show();
//     $('aside').show();
//     setTimeout(function(){
//       $('.circle').hide();
//     },2000);
//     alert("Guess where the pink ball went");
//
//   });
//
//
//   $('div').on('click',function(){
//     $(this).addClass('picked');
//     var winner = Math.round(Math.random()*100);
//     //console.log(winner);
//     if(winner <= 33){
//       $('div').css('background-color','yellow');
//       $(this).css('background-color','purple');
//       $('.circle').css('margin-left','0px').show();
//       if($('#spotOne').hasClass('picked')){
//         $('#spotOne').css('background-color','lightgreen');
//         playerScore++;
//         $('.playerScore').empty();
//         $('.playerScore').append("<p>Your Score</p>" + playerScore);
//         $('div').css('animation','single_rotate 3s linear reverse infinite');
//       }else{
//         comptScore++;
//         $('.compScore').empty();
//         $('.compScore').append("<p>Comp Score</p>"+comptScore);
//       }
//       setTimeout(function(){
//         $('div').css('background-color','yellow');
//         $('.circle').hide();
//         $('div').removeClass('picked');
//       },2000);
//       $('div').css('animation','single_rotate 3s linear reverse infinite').css('animation-delay','5s');
//     }else if(winner> 33 && winner <= 66){
//       $('div').css('background-color','yellow');
//       $(this).css('background-color','purple');
//       $('.circle').css('margin-left','30%').show();
//       if($('#spotTwo').hasClass('picked')){
//         $('#spotTwo').css('background-color','lightgreen');
//         playerScore++;
//         $('.playerScore').empty();
//         $('.playerScore').append("<p>Your Score</p>" + playerScore);
//       }else{
//         comptScore++;
//         $('.compScore').empty();
//         $('.compScore').append("<p>Comp Score</p>"+comptScore);
//       }
//       setTimeout(function(){
//         $('div').css('background-color','yellow');
//         $('.circle').hide();
//         $('div').removeClass('picked');
//       },2000);
//       $('div').css('animation','single_rotate 3s linear reverse infinite').css('animation-delay','5s');
//     }else if(winner> 66 && winner <= 100){
//       $('div').css('background-color','yellow');
//       $(this).css('background-color','purple');
//       $('.circle').css('margin-left','60%').show();
//       if($('#spotThree').hasClass('picked')){
//         $('#spotThree').css('background-color','lightgreen');
//         playerScore++;
//         $('.playerScore').empty();
//         $('.playerScore').append("<p>Your Score</p>" + playerScore);
//       }else{
//         comptScore++;
//         $('.compScore').empty();
//         $('.compScore').append("<p>Comp Score</p>"+comptScore);
//       }
//       $('div').css('animation','single_rotate 3s linear reverse infinite').css('animation-delay','5s');
//       setTimeout(function(){
//         $('div').css('background-color','yellow');
//         $('.circle').hide();
//         $('div').removeClass('picked');
//       },2000);
//     }
//   });
//   $('.stop').on('click',function(){
//     $('div').hide();
//     $('.start').show();
//     $('.stop').hide();
//   });
//
//
// });

function moveBox_1_2 (){
  $('#spotOne').css('left','45%').css('transition','left 4s');
  $('#spotTwo').css('left','35%').css('transition','left 4s');
}
function moveBox_2_3 (){
  $('#spotThree').css('left','45%').css('transition','left 4s');
  $('#spotTwo').css('left','55%').css('transition','left 4s');
}
function moveBox_1_3 (){
  $('#spotOne').css('left','55%').css('transition','left 4s');
  $('#spotThree').css('left','35%').css('transition','left 4s');
}

function pickMove() {
  var pick = Math.round(Math.random() * (3 - 1) + 1);
  if(pick == 1){
    moveBox_1_2();
    console.log('moved 1 and 2');
  }else if (pick == 2) {
    moveBox_2_3();
    console.log('moved 2 and 3');
  }else{
    moveBox_1_3();
    console.log('moved 1 and 3');
  }
}

$(document).ready(function(){
  setInterval(function(){
    $('div').css('top','12%').css('transition','top 4s');
  },3000);
  var i = 0;
  setTimeout(function(){
    while(i<6){
      pickMove();
      i++;
      alert('moved box');
    }
  },7000);
});
