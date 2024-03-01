// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Characters for the pasword
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var loChars = "abcdefghigklmnopqrstuvwxyz";
var numChars = "0123456789";
var simChars = "~!@#$%^&*?";

function generatePassword() {
  var actualPassword = "";

  alert("the following promts are criteria for generating password.");

  var pwdLenght = prompt("Chose the lenght of pasword (Between 8 and 128 charachters).");
  if (pwdLength != null) {
    if (pwdLenght >=8 && pwdLenght <=128)
    {
      alert (" ")
    }
  }


} ;
