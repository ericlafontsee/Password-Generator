// Declare global variables and create arrays for password criteria.
var generateBtn = document.querySelector("#generate");
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperAlphaArr = upperAlpha.split("");
var lowerAlpha = upperAlpha.toLowerCase();
var lowerAlphaArr = lowerAlpha.split("");
var num = "0123456789";
var numArr = num.split("");
var symbols = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symbolArr = symbols.split("");
var useNumbers;
var useLowerCase;
var useUpperCase;
var useSpecialChar;
var passwordLength;


//Main function called when the "Generate Password" button is clicked. This will pass the password into the document and initiate the generatePassword function.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Function prompts user to set password criteria and generates a random password that is returned to the writePassword function.
function generatePassword() {

  //Creating an empty array for password characters to be passed into.

  var availChar = [];

  //Runs prompt to user's desired character length. Won't execute if length is not between 8 and 128 characters.'

  passwordLength = parseInt(prompt("How many characters do you want your password to be? Enter a number between 8-128."));
  if (!passwordLength || passwordLength < 8) {
    alert("You must enter a value higher than 8.");
  } else if (passwordLength > 128) {
    alert("You must enter a value lower than 128.");
  }

  //The following conditionals gather the user's desired characters for their password.

  else {
    if (confirm("Do you want lowercase letters?")) {
      availChar.push.apply(availChar, lowerAlphaArr);
    }
    if (confirm("Do you want uppercase letters?")) {
      availChar.push.apply(availChar, upperAlphaArr);
    }

    if (confirm("Do you want special characters?")) {
      availChar.push.apply(availChar, symbolArr);
    }
    if (confirm("Do you want numbers?")) {
      availChar.push.apply(availChar, numArr);
    }
    if (availChar.length === 0) {
      alert("Please choose the characters you want!");
    }
  }

  //For loop takes values pushed into the availChar array and returns a random value based off password criteria entered.

  retVal = "";
  for (var i = 0; i < passwordLength; i++) {
    retVal += availChar[Math.floor(Math.random() * availChar.length)];
  }
  return retVal;
}

//Button invokes the writePassword function.

generateBtn.addEventListener("click", writePassword);
