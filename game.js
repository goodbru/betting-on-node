
//bets money to guess a number
// lose all their money game is over
//all bets are between $5 and $10
//guess a number between 1 and 10
//bets are given 1 to 1 odds.
//if guess is i-1 then player keeps bet
//other than that player loses bet

var prompt = require('prompt-sync')();
var colors = require('colors');

var bank = 100;
startGame();

function startGame() {
  if (bank <= 0) {
    return gameOver();
  }  
  getBetAmount();
  getRandomNumber(1,10);
  getNumberGuess();

  function getBetAmount() {
    return this.bet = parseInt(prompt('Enter your bet amount: '));
  }
  function getRandomNumber(min, max) {
    return this.randNumber = Math.floor(Math.random()*(max-min+1)+min);
  }
  function getNumberGuess() {
    return this.numberGuess = parseInt(prompt('Enter your guess: '));
  }
  console.log("randNum:" + randNumber + " - guess: " + numberGuess);

  if (bet > bank) {
    console.log("Bet amount cannot be larger than your bank!".underline.red)
    getBetAmount();
  } 

  else if (bank > 0) {
    if(randNumber === numberGuess) {
      console.log("You got it! you won " + (bet * 2) + " !".rainbow );
      console.log('bank before bet', bank);
      bank += (bet * 2);
      console.log('bank after bet', bank);
    } else if((numberGuess + 1 === randNumber) || (numberGuess - 1 === randNumber)){
      console.log("You were SO close.... Billy is giving you your bet back!".green);
      console.log('bank before bet', bank);
      console.log('bank after bet', bank);
    } else{
      console.log("Sorry PUNK, you weren't so lucky after all!".underline.red);
      console.log('bank before bet', bank);
      bank -= bet;
      console.log('bank after bet', bank);
    }
  }
      startGame();
} 



      function gameOver(){
      prompt('Goodbye'.rainbow);
      process.exit(0);
    }
