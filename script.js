"use strict";

//Varibles

const rockImage = "./assets/rock.png";
const paperImage = "./assets/paper.png";
const scissorsImage = "./assets/scissors.png";
const optionImages = [rockImage, paperImage, scissorsImage];
const playerHand = document.getElementById("playerHand");
const compHand = document.getElementById("compHand");
let playerScore = 0;
let compScore = 0;
let playerResult = document.querySelector(".player_score");
let compResult = document.querySelector(".computer_score");

//Event Listeners

//Task 1: Click "Play Game" and make game data visble and "Play Game" screen display invisible 
document.getElementById("playButton").addEventListener('click', function(){
    document.getElementById("introDiv").style.display = "none";
    document.getElementById("matchDiv").style.display = "block";
})

//Task 2: Play Paper 
document.querySelector(".paper").addEventListener('click', function(){
    playerHand.src = paperImage;
    let generatedNumber = Math.floor(Math.random() * (3));
    compHand.src = optionImages[generatedNumber];
    updateScore (paperImage, optionImages[generatedNumber]);
})
//Task 3: Play Scissors
document.querySelector(".scissors").addEventListener('click', function(){
    playerHand.src = scissorsImage;
    let generatedNumber = Math.floor(Math.random() * (3)); //This gives a num 1-3
    compHand.src = optionImages[generatedNumber]; //This uses the num to match w a picture
    updateScore (scissorsImage, optionImages[generatedNumber]); //This compares pictures
})

//Task 4: Play Rock
document.querySelector(".rock").addEventListener('click', function(){
    playerHand.src = rockImage;
    let generatedNumber = Math.floor(Math.random() * (3));
    compHand.src = optionImages[generatedNumber];
    updateScore (rockImage, optionImages[generatedNumber]);
})

//Task 5: Reset Button
document.querySelector(".reset").addEventListener('click', resetScore);

//Functions

//Scoreboard function to keep score throghout game
function updateScore(playerPlay, compPlay) {
    if (playerPlay == rockImage && compPlay == scissorsImage) { //rock > scissors
        playerResult.innerHTML = playerScore += 1;
    } else if (playerPlay == scissorsImage && compPlay == rockImage) { //scissors < rock
        compResult.innerHTML = compScore += 1;
    } else if (playerPlay == scissorsImage && compPlay == paperImage) { //scissors > paper
        playerResult.innerHTML = playerScore += 1;
    } else if (playerPlay == paperImage && compPlay == scissorsImage) { //paper < scissors
        compResult.innerHTML = compScore += 1;
    } else if (playerPlay == paperImage && compPlay == rockImage) { //paper > rock
        playerResult.innerHTML = playerScore += 1;
    } else if (playerPlay == rockImage && compPlay == paperImage) { //rock < paper
        compResult.innerHTML = compScore += 1;
    }
     isGameOver();
}

//Game over function @ first to 5 points 
function isGameOver () {
  if (playerScore === 5) {
      alert("Congratulations, you win!")
      resetScore();
  } else if (compScore === 5) {
      alert("Sorry, you lose!");
      resetScore();
    } 
}
//Reset button function 
function resetScore() {
    playerScore = 0;
    compScore = 0;
    playerResult.innerHTML = playerScore;
    compResult.innerHTML = compScore;
}