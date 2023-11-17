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
      answer = prompt(question + " yes or no?");
      answer = answer.toLowerCase();
      if (answer !== "yes" && answer !== "no") {
        alert("Please enter 'yes' or 'no'");
      }
    } while (answer !== "yes" && answer !== "no");
    return answer === "yes";
  }
  
  function getValidPasswordLength() {
    let passwordLength;
    do {
      passwordLength = prompt('Enter password length. At least 8 characters but no more than 128.');
      passwordLength = Number(passwordLength);
      if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Your password does not meet the criteria. It must be between 8 and 128 characters in length.');
      }
    } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
    return passwordLength;
  }

  let allOptionsInvalid;
  let includeNumbers, includeUpper, includeLower, includeSpecial;
  const passLength = getValidPasswordLength();

  do {
    includeNumbers = yesOrNo('Would you like your password to have numerical characters?');
    includeUpper = yesOrNo('Would you like your password to have upper case characters?');
    includeLower = yesOrNo('Would you like your password to have lower case characters?');
    includeSpecial = yesOrNo('Would you like your password to have special characters?');
  
    allOptionsInvalid = !includeNumbers && !includeUpper && !includeLower && !includeSpecial;
  
    if (allOptionsInvalid) {
      alert('At least one character type should be selected (number, upper case, lower case, special characters)');
    }
  } while (allOptionsInvalid);
  
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
/// Potential and guaranteed characters that will be added to the password
  let possibleCharacters = [];
  let guaranteedCharacters = [];
/// Selecting possible characters from the arrays. Then randomly selecting characters added to the guaranteed characters
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

  /// Loop to add characters until the password meets the lenght requirements
  for (let i = 0; i < options.passLength - guaranteedCharacters.length; i++) {
    guaranteedCharacters.push(getRandom(possibleCharacters));
  }
  
  return guaranteedCharacters.join('');
}

// Testing our function
// console.log(generatePasswordWithUserInput());

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePasswordWithUserInput();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);