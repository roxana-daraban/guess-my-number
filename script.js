'use strict'

let secretNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click', function(){
  const guess=Number(document.querySelector('.guess').value);
  console.log(guess);

//when is no input
if(!guess){
  document.querySelector('.message').textContent='No number!';
}
})


