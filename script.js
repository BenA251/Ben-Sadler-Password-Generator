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


//A function which input is character type being checked, returns a True or false value whether that character type is required.

function checkCharacterTypes (TypeCheck) {
  for (let i = false; i === false;) {
    var response = prompt(`please specify Yes or No if you require ${TypeCheck} contained within password note: answer is not case sensitive`).toLowerCase();
    if (response !== "yes" && response !== "no") {
    alert(`please specify a valid answer either Yes or No `)
    i = false }
    else if (response === "yes") {
      alert(`your response to "do you want ${TypeCheck} in password" is yes`)
      return true
    }
    else {
      alert(`your response to "do you want ${TypeCheck} in password" is no`)
      return false
    }
  }
  }
  
// Function to prompt user for password options
function getPasswordOptions() {
  for (let i = false; i === false;) {
    passwordLength = parseInt(prompt(`please specify length of password note: must be minimum of 8 but no more than 128 characters.`));
    if (passwordLength > 128 || passwordLength < 8) {
    alert(`please choose a valid length`)
    i = false }
    else {
      alert(`your chosen password length is ${passwordLength}`)
      i = true
    } 
    }
  
  for (let i = false; i === false;) {
      lowercase = checkCharacterTypes("lowercase")
      uppercase = checkCharacterTypes("uppercase")
      numeric = checkCharacterTypes("numeric")
      specCharacters = checkCharacterTypes("specCharacters")
  if (lowercase === false && uppercase === false &&  numeric === false && specCharacters === false) {
    alert(`you must specify at least one character type`)
    i = false
  }
  else
    {
      i = true
    }
  }

  return passwordLength, lowercase, uppercase, numeric, specCharacters;
}



//function for generating a array based off password criteria

function generateArray(lower, upper, num, spec) {

if (lower && upper && num && spec) {
    bespokeArray = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);
} else if (lower && upper && num && !spec) {
    bespokeArray = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
} else if (lower && upper && !num && !spec) {
    bespokeArray = lowerCasedCharacters.concat(upperCasedCharacters);
} else if (lower && !upper && !num && !spec) {
    bespokeArray = lowerCasedCharacters;
} else if (!lower && upper && !num && !spec) {
    bespokeArray = upperCasedCharacters;
} else if (!lower && !upper && num && !spec) {
    bespokeArray = numericCharacters;
} else if (!lower && !upper && !num && spec) {
    bespokeArray = specialCharacters;
} else if (lower && !upper && num && !spec) {
    bespokeArray = lowerCasedCharacters.concat(numericCharacters);
} else if (!lower && upper && !num && spec) {
    bespokeArray = upperCasedCharacters.concat(specialCharacters);
} else if (!lower && upper && num && spec) {
    bespokeArray = upperCasedCharacters.concat(numericCharacters, specialCharacters);
} else if (!lower && !upper && num && spec) {
    bespokeArray = numericCharacters.concat(specialCharacters);
} else if (lower && upper && !num && spec) {
    bespokeArray = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);
} else if (lower && !upper && num && spec) {
    bespokeArray = lowerCasedCharacters.concat(numericCharacters, specialCharacters);
} else if (lower && !upper && !num && spec) {
    bespokeArray = lowerCasedCharacters.concat(specialCharacters);
} else if (!lower && upper && num && !spec) {
    bespokeArray = upperCasedCharacters.concat(numericCharacters);
} 
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword(length, lower, upper, num, spec) {




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




//declare variables 

var passwordLength;
var lowercase;
var uppercase;
var numeric;
var specCharacters;
var passwordCharSelect;
var bespokeArray;

//run functions

getPasswordOptions();
generateArray(lowercase, uppercase, numeric, specCharacters);
generatePassword(passwordLength, lowercase, uppercase, numeric, specCharacters);
generateArray()



//testing (temp)
console.log (passwordLength);
console.log (lowercase);
console.log (uppercase);
console.log (numeric);
console.log (specCharacters);
console.log (bespokeArray);



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
