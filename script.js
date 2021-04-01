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
const optionImages = [rockImage, paperImage, scissorsImage]


//Task 1: Click "Play Game" and make game data visble and "Play Game" screen display invisible 
//Manipulte visibility in the DOM
document.getElementById("playButton").addEventListener('click', function(){
    document.getElementById("introDiv").style.display = "none";
    document.getElementById("matchDiv").style.display = "block";
})
console.log(document.getElementById("matchDiv"));

//Task 2: Play Paper 
document.querySelector(".paper").addEventListener('click', function(){
    document.getElementById("playerHand").src = paperImage;
    document.getElementById("compHand").src = optionImages[Math.floor(Math.random() * (3))];
})
//Task 3: Play Scissors
document.querySelector(".scissors").addEventListener('click', function(){
    document.getElementById("playerHand").src = scissorsImage;
    document.getElementById("compHand").src = optionImages[Math.floor(Math.random() * (3))];
})

//Task 4: Play Rock
document.querySelector(".rock").addEventListener('click', function(){
    document.getElementById("playerHand").src = rockImage;
    document.getElementById("compHand").src = optionImages[Math.floor(Math.random() * (3))];
})

//Rock Paper Scissors Rules
// Rock > Scissors (+1 point)
// Scissors > Paper (+1 point)
// Paper > Rock (+1 point)
// Rock = Rock (no points)
// Paper = Paper (no points)
// Scissors = Scissors (no points)
//Use a comparison operator to determine match winner and add points to winner
//Loop through game until one player reaches 5 points, then game reset
//Score function nested inside a loop that breaks out once player_score = 5 || computer_score = 5;
switch
    case rock > scissors
        rock + 1 point
        break;
    case Scissors > Paper
        Scissors + 1 point
        break;
    case paper > rock
        paper + 1
        break;
    case rock = rock
        points + 0
        break;
    case paper = paper
        points + 0
        break;
    case scissors = scissors
        points + 0
        break;

//Score function nested inside a loop that breaks out once player_score = 5 || computer_score = 5;
// if (player_score = 5 || computer_score = 5) {
    //game reset
// }
// if (player_score = 5) {
//     alert("Congratulations, you win!")
// } else if (computer_score = 5)
//     alert("Sorry, you lose!")



//CPU Plays
// Math.floor(Math.random() * (3));
// document.getElementById("compHand").addEventListener('click', function(){
//     document.getElementById("compHand").src = optionImages[Math.floor(Math.random() * (3))];
// })



// function checkRequired(arrayOfInputs) {
//     arrayOfInputs.forEach((input) => {
//         if (input.value.trim() === '') {
//             showError(input, `${getFieldName(input)} is required`);
//         } else {
//             showSuccess(input);
//         }
//     });
// }