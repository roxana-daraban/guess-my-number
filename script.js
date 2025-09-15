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

  //when the player wins
}else if(guess==secretNumber){
  document.querySelector('.message').textContent='Correct number!';
  document.querySelector('.number').textContent=secretNumber;

  document.querySelector('body').style.backgroundColor='#60b347';
  document.querySelector('.number').style.width='30rem';

  if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
  }
  

}
})


