// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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
  let PassLenght = prompt('Enter password length. At least 8 characters but no more than 128.');
  let PassNum = ('Would you like your password to have numerical characters?')
  let PassUpper = ('Would you like your password to have upper case characters?')
  let PassLower = ('Would you like your password to have lower case characters?')
  let PassSpecialChar = ('Would you like your password to have special characters?')


  function lenght(a) {
  let b 
  do {
    b = prompt(a);
    if (PassLenght < 8 || PassLenght > 128) {
      alert("Your password does not meet the criteria. It must be between 8 and 128 characters in length.It must be between 8 and 128 characters in length");
    }
  } while (PassLenght < 8 || PassLenght > 128);

  if (PassLenght < 8 || PassLenght > 128) {
    return b
  }
}
  PassLenghtAnswer = lenght(PassLenght)
  console.log(PassLenghtAnswer)

  function yesOrNo(a) {
    let b;
    do {
      b = prompt(a);
      if (b !== "yes" && b !== "no") {
        alert("Please enter 'yes' or 'no'");
      }
    } while (b !== "yes" && b !== "no");

    if (b === "yes") {
      return true;
    } else {
      return false;
    }
  }

  let PassNumAnswer = yesOrNo(PassNum);
  let PassUpperAnswer = yesOrNo(PassUpper);
  let PassLowerAnswer = yesOrNo(PassLower);
  let PassSpecialCharAnswer = yesOrNo(PassSpecialChar);

}
function getValidPasswordLength() {
  let passwordLength;

  do {
    passwordLength = prompt('Enter password length. At least 8 characters but no more than 128.');

    if (passwordLength < 8 || passwordLength > 128) {
      alert('Your password does not meet the criteria. It must be between 8 and 128 characters in length.');
    }
  } while (passwordLength < 8 || passwordLength > 128);

  return passwordLength;
}

const passwordLength = getValidPasswordLength();
console.log(passwordLength);

// Function for getting a random element from an array
function getRandom(arr) {

  return arr[Math.floor(Math.arr() * arr.length)];

}

// Function to generate password with user input
function generatePassword(Pass) {


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);