// Assignment Code
var generateBtn = document.querySelector("#generate");


// Password Length
// Include Special Characters



function generatePassword(
  passwordLength, 
  includeSpecial,
  iuncludeLowercase,
  includeUppercase
  ) {

   let characterOptions = [];

   let lowercase = ["a", "b", "c", "d"];
   let uppercase = ["A", "B", "C", "D"];
   let special = ["!", "#", "@"];

   if (includeSpecial) {
     characterOptions = characterOptions.concat(special)
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
   let passwordLength = 10;
   let includeSpecial = true;
   let includeLowercase = true;
   let includeUppercase = false;

  var password = generatePassword(
      passwordLength, 
      includeSpecial,
      includeUppercase,
      includeLowercase 
      );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
