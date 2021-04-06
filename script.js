"use strict";
//javascript
// make rock function
// make paper function
// make scissors function
// make reset function 
// create score fuction
// limit game to five points
// When you click 'let's play' the data for 
// the rock paper scissors game becomes visible
///compare the user choice and the cpu choice to declare winner

//What needs to be clicked on, what needs an event listener, what needs to be stored in a varible


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
let compResult =  document.querySelector(".computer_score");

//Task 1: Click "Play Game" and make game data visble and "Play Game" screen display invisible 
//Manipulte visibility in the DOM
document.getElementById("playButton").addEventListener('click', function(){
    document.getElementById("introDiv").style.display = "none";
    document.getElementById("matchDiv").style.display = "block";
})
console.log(document.getElementById("matchDiv"));

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
//Scoreboard to keep score throghout game
function updateScore (playerPlay, compPlay){
console.log(playerPlay, compPlay);  
    if (playerPlay == rockImage && compPlay == scissorsImage) { //rock > scissors
        playerResult.innerHTML = playerScore += 1;
        console.log(playerPlay, compPlay);
    }else if (playerPlay == scissorsImage && compPlay == rockImage) { //scissors < rock
        compResult.innerHTML = compScore += 1;
        console.log(playerPlay, compPlay);
    }else if (playerPlay == scissorsImage && compPlay == paperImage) { //scissors > paper
        playerResult.innerHTML = playerScore += 1;
        console.log(playerPlay, compPlay);
    }else if (playerPlay == paperImage && compPlay == scissorsImage) { //paper < scissors
        compResult.innerHTML = compScore += 1;
        console.log(playerPlay, compPlay);
    }else if (playerPlay == paperImage && compPlay == rockImage) { //paper > rock
        playerResult.innerHTML = playerScore += 1;
        console.log(playerPlay, compPlay);
    }else if (playerPlay == rockImage && compPlay == paperImage) { //rock < paper
        compResult.innerHTML = compScore += 1;
        console.log(playerPlay, compPlay);
    }

    // else if (playerPlay === 5) {
    //     alert("Congratulations, you win!")
    //     playerResult.innerHTML = playerScore = 0;
    //     compResult.innerHTML = compScore = 0;
    // } else if (compPlay === 5) {
    //     alert("Sorry, you lose!");
    // } console.log(playerScore, compScore);
}

//Task 5: Reset Button
document.querySelector(".reset").addEventListener('click', function(){
    playerResult.innerHTML = 0;
    compResult.innerHTML = 0;
}) //Issue: game picks back up at most recent score, not clearing out to 0
    


//Loop through game until one player reaches 5 points, then game reset
//Score function nested inside a loop that breaks out once player_score = 5 || computer_score = 5;