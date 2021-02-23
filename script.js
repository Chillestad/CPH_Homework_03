// Assignment Code
var generateBtn = document.querySelector("#generate");


// Password Length
// Include Special Characters



function generatePassword(
  passwordLength, 
  includeSpecial,
  includeLowercase,
  includeUppercase,
  includeNumber,
  ) {

   let characterOptions = [];

   let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   let special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
   let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

   if (includeSpecial) {
     characterOptions = characterOptions.concat(special)
   }

   if (includeUppercase) {
      characterOptions = characterOptions.concat(uppercase)
   }

   if (includeLowercase) {
    characterOptions = characterOptions.concat(lowercase)
    }

    if (includeNumber) {
      characterOptions = characterOptions.concat(number)
   }



    let res = ""

    console.log(characterOptions)

    for (i=0; i<passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterOptions.length)
      res += characterOptions[randomIndex]
    }
      return res
    }
``

// Write password to the #password input
function writePassword() {
   let passwordLength = window.prompt("Enter Length");
    // while (passwordLength <=8 || paswordLength <=128) {
    //   window.alert("Password must be between 8-128 characters");
    //   let passwordLength = window.prompt("Enter Length"));
      
   let includeSpecial = true;
   let includeLowercase = true;
   let includeUppercase = false;
   let includeNumber = true;

  var password = generatePassword(
      passwordLength, 
      includeSpecial,
      includeUppercase,
      includeLowercase,
      includeNumber
      );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
