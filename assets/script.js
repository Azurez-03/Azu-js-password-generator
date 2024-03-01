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

//pw generating code bellow
function generatePassword() {
  var actualPassword = "";

  alert("the following promts are criteria for generating password.");
  //pw length
  var pwdLenght = prompt("Chose the lenght of pasword (Between 8 and 128 charachters).");
  if (pwdLength != null) {
    if (pwdLenght >= 8 && pwdLenght <= 128) {
      alert("One of the following must be a choise lowercase, upercase, numeric, and/or special character must be confirmed.");

      var chooser = false;
      var charChoices = "";

      var upCase = confirm("Do you wnat uper case charachters?");
      if (upCase === true) {
        chooser = true;
        charChoices += upChars;
      }

      var loCase = confirm("Do you want lower case charachters?");
      if (loCase === true) {
        chooser = true;
        charChoices += loChars;
      }
      var numCase = confirm("Do you want numeric charachters?");
      if (numCase === true) {
        chooser = true;
        charChoices += numChars;
      }

      var simCase = confirm("Do you want special charachters?");
      if (simCase === true) {
        chooser = true;
        charChoices += simChars;
      }

      if (chosser === false) {
        alert("You must choose at least one of lowercase, uppercase, numeric, and /or special character type.");
      } else {
        for (i =1; i< pwdLength; i++){
          actualPassword += charChoices[Math.floor(Math.random()*charChoices.length)];
        };
      };
      }
    }
  }


};
