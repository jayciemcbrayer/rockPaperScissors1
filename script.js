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

//Task 1: Click "Play Game" and make game data visble and "Play Game" screen display invisible 
//Manipulte visibility in the DOM







///Rock 
function playRock ()

let rock = document.querySelector(".rock");
myBox.addEventListener("click", playRock);

//Paper
function playPaper ()

let paper = document.querySelector(".paper");
myBox.addEventListener("click", playPaper);

//Scissors
function playScissors ()

let scissors = document.querySelector(".scissors");
myBox.addEventListener("click", playScissors);


function playMatch () 
 if (player clicks rock)
 play rock
 else if (player clicks paper)
 play paper
 else 
 play scissors

 //CPU
 Math.floor(Math.random() * (max - min) + 1);
 //make a number between 1-3 correspond with an action button
 let a number (1) = an action (rock) ?

 //options
switch 
    case
    if ()
    else if ()
    else ()
    break;
    case
    if ()
    else if ()
    else ()
    break;

//nest varibles in an array
//let game = [rock, paper, scissors]

function checkRequired(arrayOfInputs) {
    arrayOfInputs.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}