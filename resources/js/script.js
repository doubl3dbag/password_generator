// Generate random number for password length
function getRandomInt(min, max) {
  min = Math.ceil(8);
  max = Math.floor(124);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Generate random number for character length
function randomizeCharIdx(num) {
  return Math.floor(Math.random() * num);
}


const passwordLength = getRandomInt(); //randomize the integer and store it in a variable

const allChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'"]; // variable to hold all characters

let getRandomAll = randomizeCharIdx(allChars.length); // get a random number the length of the character array

const password = []; // empty variable to push characters into

//function to generate a random password
function writePassword() {
  for(let i = 0; i < passwordLength; i++) {
    if(i < passwordLength) {
      getRandomAll = randomizeCharIdx(allChars.length);
    }
    password.push(allChars[getRandomAll]);
  } 
 return password;
}

// Format password without punctuation
function formatPassword(password) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = password.join('')
  console.log(`Your new password is: ${formatted}`)
}

// call the function to generate the password
writePassword();

// call the function to format the final password without punctuation
formatPassword(password);
