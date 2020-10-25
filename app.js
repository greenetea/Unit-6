// const overlay = document.querySelector(#overlay);
//Add needed variables
  // Get the element with the id of qwerty and save it to a variable.
const keyboard = document.querySelector('#qwerty');
  // Get the element with the id of phrase and save it to a variable.
const winningPhrase = document.getElementById(phrase);
  // Get the element with a class of btn__reset and save it to a variable
const reset = document.querySelector('.btn_reset');
const startScreen = document.querySelector('.start');
  // Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed (remember, if the player guesses wrong 5 times, they lose the game)
let missed = 0;
// Create an array named phrases.
  // Declare and initialize the phrases array, storing at least five strings that contain only letters and spaces, no punctuation.
var phrases = ['lazors', 'phazors', 'tracker beam', 'hyper space', 'warp drive'];
const ul = document.querySelector('#phrase');
let liveHeart = document.querySelectorAll('IMG')
// Attach an event listener to the “Start Game” button to hide the start screen overlay.
  // Add the event listener to the variable you created for the btn_reset element
reset.addEventListener('click', (e)  =>  {
  // Hide the overlay by changing its display property.
  startScreen.style.display = 'none';
});

const randomNumber = Math.floor(Math.random() * Math.floor(phrases.length));
// Create a getRandomPhraseAsArray function.
const getRandomPhraseAsArray = (phrases) =>  {
//   // Start by creating a function “stub”, where you declare the function and its parameters, but leave the function body blank. Add a code comment that describes the purpose of the function.
//   // Create a variable to store a random number based on the length of the array
//     // Use the variable to select an index inside of the array
  var randomPhrase = phrases[randomNumber].split('');
  // Return the array element at that index
  return randomPhrase;
};
  // After you create the getRandomPhraseAsArray, you will need to “call” it, and pass the phrases array to it.

function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = arr[i];
      ul.appendChild(listItem);
      if (listItem.textContent == ' ') {
          listItem.className = 'space';
      } else {
          listItem.className = 'letter';
      }
  }
}

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
// Create a checkLetter function
// Create a function “stub” for the checkLetter function
  // Include a parameter in the function head for the button that gets clicked
// Add an event listener to the keyboard || Note: the event listener should be listening for a user to press a button on the on screen keyboard, not the physical keyboard of the computer.
function checkLetter(arr) {
keyboard.addEventListener('click', (e)  =>  {
  if (e.target.tagName == 'BUTTON') {

      // Add the “chosen” class to the button that was pressed.
      e.target.classList.add('chosen');
      // Store all of the li elements in a variable inside checkLetter
      const checkLetter = document.getElementsbyClassName('letter');
      // Create a variable to store if a match is found and give it an initial value of null
      let match = null;
       // Loop through all of the li elements. Remember: arrays start with index 0!
      for (let i = 0; i < checkLetter.length; i++)  {
        // Create a conditional that compares the text of the button parameter to the text of the li at the current index of the loop
        if(checkLetter[i].textContent == arr) {
          // If they match, add the “show” class to the li
          checkLetter[i].ClassList.add('show');
          // If they match, store the button text in the match variable
          match = show;
          }
        }
        // Once the loop completes, return the match variable
        return match;
      }
    })


// Call the checkLetter function and store the results in a variable.
  const chosenLetter = checkletter(e.target.textContent);
  // Use a conditional to filter out clicks that don’t happen on the buttons or if the button already has the “chosen” class
  if (e.target.className == 'chosen') {
    e.target.disabled = true;
  }
      // If the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter
  if (chosenLetter == null)  {
    liveheart[missed].setAttribute('src', 'images/lostHeart.png')
    missed +=1
  }

  };




// Create a checkWin function
// Create a variable to store the li elements that have the class name “letter”
// Create a variable to store the li elements that have the class name “show”
// Check if the length of the 2 variables are the same. If they are, display the win  overlay
  // Create the win overlay by adding the “win” class to the start overlay.
  // Change the headline text of the start overlay to show a person won.
  // Change the display property of the overlay to “flex”
// Check if the missed counter is greater than 4. If they are, display the lose overlay
  // Create the lose overlay by adding the “lose” class to the start overlay.
  // Change the headline text of the start overlay to show a person lost.
  // Change the display property of the overlay to “flex”
