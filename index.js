function randomGenerator(){
    var dice = Math.floor(Math.random()*6) + 1;
    return "images/dice"+dice+".png";
}

var player1 = randomGenerator();
var player2 = randomGenerator();

if(player1 > player2){
    document.querySelector("h1").innerHTML =  "Player 1 wins!"
}
else if (player2 > player1){
    document.querySelector("h1").innerHTML =  "Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML =  "Draw... <br>Roll again!"
}

document.querySelectorAll(".dice img")[0].setAttribute("src",player1);
document.querySelectorAll(".dice img")[1].setAttribute("src",player2);