var level = 0;
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var buttonColors = ["red", "blue", "green", "yellow"];


function nextSequence(){
    level++;
    $('#level-title').text('level ' + level);
var randomNumber = Math.round(Math.random()*3);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
console.log(gamePattern);
$('#'+ randomChosenColor).fadeOut(100).fadeIn(100);
const audio = document.getElementById(randomChosenColor +"Audio");
audio.play();
userClickedPattern = [];
}



var btn = document.querySelectorAll('.btn');



function buttonClick(btnClicked){
    btnClicked.onclick = function(e){
       const userChosenColor = e.target.id;
       var audio = new Audio("sounds/" + userChosenColor + ".mp3");
        audio.play();
        $('#'+userChosenColor).addClass('pressed').fadeOut(100).fadeIn(100).removeClass('pressed'); 
       userClickedPattern.push(userChosenColor); 
       console.log(userClickedPattern);
       checkAnswer(userClickedPattern.length-1)
    }
}

btn.forEach(buttonClick);

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){  
    console.log('successfully');
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
}}
else{
console.log("retard")
$('body').addClass('game-over');
setTimeout(function () {
    $('body').removeClass('game-over');
  }, 200);
  startOver();
}
}

function startOver(){
    level = 0;
    gamePattern = [];
    $("#level-title").text("Game over, press any key to restart");
    started = false;
    
}