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

  alert("The following promts are criteria for generating password.");

  //pw length
  var pwdLength = prompt("Chose the lenght of pasword. Between 8 and 128 charachters.");
  if (pwdLength != null) {
    if (pwdLength >= 8 && pwdLength <= 128) {

      alert("One of the following must be a choise lowercase, upercase, numeric, and/or special character must be confirmed.");

      var chooser = false;
      var chaChoices = "";

      var upCase = confirm("Do you wnat upercase charachters?");
      if (upCase === true) {
        chooser = true;
        chaChoices += upChars;
      }

      var loCase = confirm("Do you want lowercase charachters?");
      if (loCase === true) {
        chooser = true;
        chaChoices += loChars;
      }
      var numChoice = confirm("Do you want numeric charachters?");
      if (numChoice === true) {
        chooser = true;
        chaChoices += numChars;
      }

      var simChoice = confirm("Do you want special charachters?");
      if (simChoice === true) {
        chooser = true;
        chaChoices += simChars;
      }

      if (chooser === false) {
        alert("You must choose at least one of lowercase, uppercase, numeric, and /or special character type.");
      } else {

        for (i =1; i< pwdLength; i++ ){
          actualPassword += chaChoices[Math.floor(Math.random()*chaChoices.length)];
        };
      };

    } else {
      alert("Number must be between 8 and 128 characters")
      return;
      
    };
   
  };
  return actualPassword;
}
