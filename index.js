
// dice game

function dice(){

  var diceroll = Math.floor((Math.random()*6)+1);



  document.querySelector(".dice1").src="images/dice" + diceroll + ".png"



  var diceroll2 = Math.floor((Math.random()*6)+1);



  document.querySelector(".dice2").src="images/dice" + diceroll2 + ".png"


    if(diceroll > diceroll2){
      document.querySelector(".rolldice").innerHTML="Player 1 wins!"}
      else if(diceroll < diceroll2){
        document.querySelector(".rolldice").innerHTML="Player 2 wins!"}
        else{
          document.querySelector(".rolldice").innerHTML="Draw!"}
}








document.querySelector(".bz").onclick = function(){dice()};

// end dice game
numberone=0
numbertwo=0
answer=numberone+numbertwo
function math(){

  numberone = Math.floor((Math.random()*999)+1);
  numbertwo = Math.floor((Math.random()*999)+1);
  document.querySelector(".numb1").innerHTML=numberone + "+" + numbertwo + "="
answer=numberone+numbertwo

}

document.querySelector(".startt").onclick = function(){math()};


function math2(){
var answer2 = document.getElementById('answer').value

if (answer2==answer){
alert("That's right!")
numberone = Math.floor((Math.random()*999)+1);
numbertwo = Math.floor((Math.random()*999)+1);
document.querySelector(".numb1").innerHTML=numberone + "+" + numbertwo + "="
answer=numberone+numbertwo
}
else{

alert("Try again!")
}

}

document.querySelector(".submitt").onclick = function(){math2()};
