// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//ADDED CODE BELOW THIS POINT B.SADLER 

//for loop to check for lowercase requirement returns true or false value

//A function which input is character type being checked, returns a True or false value whether that character type is required.


function checkCriteria () {
  for (let i = false; i === false;) {
    var lowercase = checkCharacterTypes("Lowercase")
    var uppercase = checkCharacterTypes("Uppercase")
    var Numeric = checkCharacterTypes("Numeric")
    var specCharacters = checkCharacterTypes("Special Characters")
  if (lowercase === false && uppercase === false &&  Numeric === false && specCharacters === false) {
  alert(`you must specify at least one character type`)
  i = false
}
else
  {
    return lowercase, uppercase, Numeric, specCharacters
    i = true
}
return lowercase, uppercase, Numeric, specCharacters
}
return lowercase, uppercase, Numeric, specCharacters
}

function checkCharacterTypes (TypeCheck) {
  for (let i = false; i === false;) {
    var response = prompt(`please specify Yes or No if you require ${TypeCheck} contained within password note: answer is not case sensitive`).toLowerCase();
    if (response !== "yes" && response !== "no") {
    alert(`please specify a valid answer either Yes or No `)
    i = false }
    else if (response === "yes") {
      alert(`your response to "do you want ${TypeCheck} in password" is yes`)
      i = true
      return true
    }
    else {
      alert(`your response to "do you want ${TypeCheck} in password" is no`)
      i = true
      return false
    }
  }
  }
  

//for loop to received password length and will end once valid value received returns number value
  for (let i = false; i === false;) {
    var passwordLength = parseInt(prompt(`please specify length of password note: must be minimum of 8 but no more than 128 characters.`));
    if (passwordLength > 128 || passwordLength < 8) {
    alert(`please choose a valid length`)
    i = false }
    else {
      alert(`your chosen password length is ${passwordLength}`)
      i = true
    } 
    }



checkCriteria();




//need to put function within function to check at least one character has been selected.

//add values in array and then do check array function to check presence of true if not the repeat password criteria selection with alert saying must select at least one characerter tygpe. (Use contains function)

//else create object using criteria.
//Object PasswordSelect

//Characterlength 
//lowercase: true
///uppercase:
//Numeric:
//SpecialCharaceters: 






//need to generate password using collected criteria.
