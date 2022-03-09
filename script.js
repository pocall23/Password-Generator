// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialChars;
var passwordLength;

passwordLength = window.prompt("How many characters do you want you password to be?");
confirmLowercase = window.confirm("Would you like to use lowercase letters?")
confirmUppercase = window.confirm("Would you like to use uppercase letters")
confirmNumbers = window.confirm("Would you like to use numbers?")
confirmSpecialChars = window.confirm("Would you like to use special characters?")


var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&\"\\\'*(){}[]:;|<,>.~`";

var charactersArray = characters.split("")

var lowercaseLetters = charactersArray.slice(0,26);
var uppercaseLetters = charactersArray.slice(26,52);
var numbers = charactersArray.slice(52,62);
var specialCharacters = charactersArray.slice(62,87); 

console.log(lowercaseLetters)
console.log(uppercaseLetters)
console.log(numbers)
console.log(specialCharacters)
console.log(charactersArray)

// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q","r","s", "t", "u", "v", "w", "x", "y", "z"]
// var numbers = [0,1,2,3,4,5,6,7,8,9]
// var specialCharacters = ["~", "`", "!", "@", "#", "$","%","^", "&","*", "(",")","-","_","+","=","{","}",":",";","\"","\'","\\","|","<",",",">",".","?","/"]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
function passwordCharLength(){
  if(passwordLength > 8 && passwordLength < 128){
    console.log("working")
    
}else{
 window.prompt("The number must be between 8 & 128")

}}
passwordCharLength()
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  






}
