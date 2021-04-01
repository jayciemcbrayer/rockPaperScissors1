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
    document.getElementById("playerHand").src = optionImages;
})
//Task 3: Play Scissors
document.querySelector(".scissors").addEventListener('click', function(){
    document.getElementById("playerHand").src = scissorsImage;
})

//Task 4: Play Rock
document.querySelector(".rock").addEventListener('click', function(){
    document.getElementById("playerHand").src = rockImage;
})

//CPU Plays
Math.floor(Math.random() * (3));
document.getElementById("compHand").addEventListener('click', function(){
    document.getElementById("compHand").src = optionImages[Math.floor(Math.random() * (3))];
})



// function playMatch () 
//  if (player clicks rock)
//  play rock
//  else if (player clicks paper)
//  play paper
//  else 
//  play scissors

//  //CPU
//  Math.floor(Math.random() * (max - min) + 1);
//  //make a number between 1-3 correspond with an action button
//  let a number (1) = an action (rock) ?

//  //options
// switch 
//     case
//     if ()
//     else if ()
//     else ()
//     break;
//     case
//     if ()
//     else if ()
//     else ()
//     break;

// //nest varibles in an array
// //let game = [rock, paper, scissors]

// function checkRequired(arrayOfInputs) {
//     arrayOfInputs.forEach((input) => {
//         if (input.value.trim() === '') {
//             showError(input, `${getFieldName(input)} is required`);
//         } else {
//             showSuccess(input);
//         }
//     });
// }