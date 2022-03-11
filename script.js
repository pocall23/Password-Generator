// Assignment Code
var generateBtn = document.querySelector("#generate");

// calling variables that wil be used

var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialChars;
var passwordLength;
var choices;
var start;

// calling arrays of the different possible choices of characters
var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  ":",
  ";",
  '"',
  "'",
  "\\",
  "|",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
var alphaUpperCase = alphabet.map((alphabet) => {
  return alphabet.toUpperCase();
});

// Write password to the #password input
function writePassword() {
  
  // the first prompt for the user to use
  start = parseInt(
    prompt(
      "How many characters do you want you password to be? Chose between 8 and 128."
    )
  );
    //if the user input does not include a number
  if (!start) {
    alert("You need to assign a value");

    //if the user input does not include a number between 8 and 128
  } else if (start < 8 || start > 128) {
    start = parseInt(prompt("You must chose between 8 and 128 characters"));
  } else {
    confirmLowercase = window.confirm(
      "Would you like to use lowercase letters?"
    );
    confirmUppercase = window.confirm(
      "Would you like to use uppercase letters"
    );
    confirmNumbers = window.confirm(
      "Would you like to use numbers?"
    );
    confirmSpecialChars = window.confirm(
      "Would you like to use special characters?"
    );
  }
  //if no options are chosen
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumbers &&
    !confirmSpecialChars
  ) {
    window.alert("You must chose at least one option");

    //4 criteria input
  } else if (
    confirmLowercase &&
    confirmUppercase &&
    confirmNumbers &&
    confirmSpecialChars
  ) {
    var choices = alphabet.concat(numbers, specialCharacters, alphaUpperCase);

    //3 criteria input
  } else if (confirmLowercase && confirmUppercase && confirmNumbers) {
    var choices = alphabet.concat(alphaUpperCase, numbers);
  } else if (confirmLowercase && confirmUppercase && confirmSpecialChars) {
    var choices = alphabet.concat(alphaUpperCase, specialCharacters);
  } else if (confirmLowercase && confirmSpecialChars && confirmNumbers) {
    var choices = alphabet.concat(specialCharacters, numbers);
  } else if (confirmSpecialChars && confirmUppercase && confirmNumbers) {
    var choices = specialCharacters.concat(alphaUpperCase, numbers);

    //2 criteria input
  } else if (confirmLowercase && confirmUppercase) {
    var choices = alphabet.concat(alphaUpperCase);
  } else if (confirmLowercase && confirmNumbers) {
    var choices = alphabet.concat(numbers);
  } else if (confirmLowercase && confirmSpecialChars) {
    var chocies = alphabet.concat(specialCharacters);
  } else if (confirmNumbers && confirmUppercase) {
    var chocies = numbers.concat(alphaUpperCase);
  } else if (confirmNumbers && confirmSpecialChars) {
    var choices = numbers.concat(specialCharacters);

    // single criteria input
  } else if (confirmLowercase) {
    var choices = alphabet;
  } else if (confirmUppercase) {
    var choices = alphaUpperCase;
  } else if (confirmNumbers) {
    var choices = numbers;
  } else if (confirmSpecialChars) {
    var choices = specialCharacters;
  }
}

// an array for the password to be stored
var password = [];

//the function which creates a random password and is pushed into the password array
function generatePassword() {
  var generatedPassword = Math.floor(Math.random() * choices);

  password.push(generatedPassword);
}

// converting password array into string
var passwordString = password.join("")


var passwordText = document.querySelector("#password");


passwordText.value = passwordString;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
