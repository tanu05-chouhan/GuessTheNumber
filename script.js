'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent="Correct Number!";
// document.querySelector(".number").textContent="13";
// document.querySelector(".score").textContent="15";
// document.querySelector(".guess").value="11";
let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value);
    if(!guess){
       console.log(document.querySelector(".message").textContent="No Number!");
    }
    //guess is correct 
    else if(guess === secretNumber) {
       document.querySelector(".message").textContent="Correct Number!"; 
       document.querySelector('.number').textContent = secretNumber;
       document.querySelector("body").style.backgroundColor="#60b347";
       document.querySelector(".number").style.width="30rem";

       if(score > highscore){
           highscore=score;
           document.querySelector(".highscore").textContent=highscore;
       }
    }
    //if guess is wrong
    else if(guess !== secretNumber){
            if(score>1){
                document.querySelector(".message").textContent= guess > secretNumber ? "Too High!":"Too Low!";
                score--;
                document.querySelector(".score").textContent=score;
            }
            else{
                document.querySelector(".message").textContent="You lost the game"; 
                document.querySelector(".score").textContent="0";
            }
    }
});

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent="Start Guessing..."; 
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value="";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";

});