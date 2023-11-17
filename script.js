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


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to prompt user for password options
function getPasswordOptions() {
  function yesOrNo(question) {
    let answer;
    do {
      answer = prompt(question + " Yes or No?");
      if (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no") {
        alert("Please enter 'yes' or 'no'");
      }
    } while (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no");
    return answer.toLowerCase() === "yes";
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

  const passLength = getValidPasswordLength();
  const includeNumbers = yesOrNo('Would you like your password to have numerical characters?');
  const includeUpper = yesOrNo('Would you like your password to have upper case characters?');
  const includeLower = yesOrNo('Would you like your password to have lower case characters?');
  const includeSpecial = yesOrNo('Would you like your password to have special characters?');
  
  return {
    passLength,
    includeNumbers,
    includeUpper,
    includeLower,
    includeSpecial
  };
}

// Function to generate password with user input
function generatePasswordWithUserInput() {
  let options = getPasswordOptions();

  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if (options.includeNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  
  if (options.includeUpper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.includeLower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.includeSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  for (let i = 0; i < options.passLength - guaranteedCharacters.length; i++) {
    guaranteedCharacters.push(getRandom(possibleCharacters));
  }
  
  return guaranteedCharacters.join('');
}

// Testing our function
console.log(generatePasswordWithUserInput());

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