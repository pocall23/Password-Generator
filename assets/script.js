// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialChars= [
  "!",
  "@",
  "#",
  "~",
  "$",
  "^",
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

];
// Array of numeric characters to be included in password
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
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

// Array of uppercase characters to be included in password
var uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Ensure the user has enter the correct input
function startPassword(selectChars) {
  if (selectChars == NaN) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(selectChars) < 8) {
    alert("Please pick a number higher than 8");
    return false;
  } else if (parseInt(selectChars) > 128) {
    alert("Please pick a number below 128.");
    return false;
  }
  return true;
}

//Get random characters from each chosen character array
function getRandomChars(assortment) {
  return assortment[Math.floor(Math.random() * assortment.length)];
}

//prompts for the user to select their desired password characters
function generatePassword() {
  var selectChars = prompt(
    " How many characters would you like in your password? \n \n Please enter a number between 8 and 128."
  );
  var passwordValid = startPassword(selectChars);
  if (passwordValid) {
    var hasSpecialChars = confirm(
      " Would you like special characters in your password? \n \n Click OK to confirm. \n Click cancel to skip."
    );
    var hasNumbers = confirm("Would you like numbers in your password?");
    var hasLowercase = confirm(
      "Would you like lowercase letters in your password?"
    );
    var hasUppercase = confirm(
      "Would you like capital letters in your password?"
    );
  }
  //Ensuring the user selected atleast one character type.
  if (
    [hasSpecialChars, hasNumbers, hasLowercase, hasUppercase].includes(
      true
    )
  )
    //Array to store types of characters for the password
    var chosenChars = [];

  //Array to contain one of each type of chosen character to ensure each will be used
  var promisedChars = [];

  //Conditional statements that add array of each type of character into array of possible characters based on user input and pushes new random character to promisedChars.
  if (hasSpecialChars) {
    chosenChars = chosenChars.concat(specialChars);
    promisedChars.push(
      specialChars[Math.floor(Math.random() * specialChars.length)]
    );
  }
  if (hasNumbers) {
    chosenChars = chosenChars.concat(numbers);
    promisedChars.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
  if (hasLowercase) {
    chosenChars = chosenChars.concat(lowercaseChars);
    promisedChars.push(
      lowercaseChars[
        Math.floor(Math.random() * lowercaseChars.length)
      ]
    );
  }
  if (hasUppercase) {
    chosenChars = chosenChars.concat(uppercaseChars);
    promisedChars.push(
      uppercaseChars[
        Math.floor(Math.random() * uppercaseChars.length)
      ]
    );
  }

  //For loop to iterate over the password length from the options object, selecting random characters from the array of possible characters and adding those characters into the variable results.
  var randomChars = [];
  for (var i = 0; i < selectChars; i++) {
    var index = Math.floor(Math.random() * chosenChars.length);
    randomChars.push(chosenChars[index]);
  }
  var replacedPosition = {};
  //While loop to ensure an index position can not replaced again with another promised character.
  while (promisedChars.length > 0) {
    var replaceChars = Math.floor(Math.random() * randomChars.length);
    if (!replacedPosition[replaceChars]) {
      randomChars[replaceChars] = promisedChars.pop();
      replacedPosition[replaceChars] = true;
    }
  }
  return randomChars.join("");
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


