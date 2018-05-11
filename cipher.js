//array of letters
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', 'é', 'è', 'ç', 'à', 'ù', 'ê', `'`, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let lastChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', 'é', 'è', 'ç', 'à', 'ù', 'ê', `'`, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let allData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', 'é', 'è', 'ç', 'à', 'ù', 'ê', `'`, '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// encoding the message
let encode = (message, key) => {
  //final
  let combinedDecoded = "";
  //checks if the key is only lowercase and if its bigger or equal to the message.
  if (/^[a-z]+$/.test(key) == true && key.length >= message.length -1) {
    //splits the message string letter by letter and places them in an array.
    let arrayMessage = message.split('');
    console.log(arrayMessage);
    //transforms the letters in message to numbers.
    let encodedMessage = [];

    for (var i = 0; i < arrayMessage.length; i++) {
      // if (letters[i] == -1) {
      //   encodedMessage[i] = " ";
      // } else {
        encodedMessage.push(letters.indexOf(arrayMessage[i]));
      // }
    }
    //splits the key string letter by letter and places them in an array.
    let arrayKey = key.split('');
    // console.log(arrayKey);
    //transforms the letters in key to numbers.
    let encodedKey = [];
    for (var i = 0; i < arrayMessage.length; i++) {
      // if (letters[i] == -1) {
      //   encodedKey[i] = " ";
      // } else {
        encodedKey.push(letters.indexOf(arrayKey[i]));
      // }
    }
    //add the message ciphers to the key ciphers.
    let combinedEncoded = [];
    for (var i = 0; i < encodedMessage.length; i++) {
      // if (encodedMessage[i] == -1) {
      //   combinedEncoded[i] = " ";
      // } else {
        if (encodedMessage[i] + encodedKey[i] > 45) {
          let max = Math.max(encodedMessage[i], encodedKey[i]);
          let min = Math.min(encodedMessage[i], encodedKey[i]);
          combinedEncoded.push(min - (45 - max) - 1);
        } else {
          combinedEncoded.push(encodedMessage[i] + encodedKey[i]);
        // }
      }
    }
    //putting back the encoded and combined ciphers into letters in an array.
    for (var i = 0; i < combinedEncoded.length; i++) {
      // if (combinedEncoded[i] == -1) {
      //   combinedDecoded += " ";
      // } else {
        combinedDecoded += letters[combinedEncoded[i]];
      // }
    }
    // let arrayMessageLength = arrayMessage.length;
    // return arrayMessageLength;
    //testing
    console.log( "encoded message " + encodedMessage);
    console.log("encoded key " + encodedKey);
    console.log( "combined encoded " + combinedEncoded);
    console.log( "combined decoded " + combinedDecoded);
    return combinedDecoded;
  } else {
    return "only lowercase and key must be equal or greater";
  }
}

//decoding the message
let decode = (cipher, key) => {

  //whatever
  let compareDecoded = "";
  if (/^[a-z]+$/.test(key) == true && key.length >= cipher.length -1) {
    //same as encode()
    let arrayCipher = cipher.split('');
    console.log(arrayCipher);
    //same as encode()
    let encodedCipher = [];
    for (var i = 0; i < arrayCipher.length; i++) {
      encodedCipher.push(letters.indexOf(arrayCipher[i]));
    }
    //same as encode()
    let arrayKey = key.split('');
    console.log(arrayKey);
    //same as encode()
    let encodedKey = [];
    for (var i = 0; i < arrayCipher.length; i++) {
      encodedKey.push(letters.indexOf(arrayKey[i]));
    }
    //formula to decode the message
    let finalDecoded = [];
    for (var i = 0; i < encodedCipher.length; i++) {
      if (encodedCipher[i] - encodedKey[i] < 0) {
        let max = Math.max(encodedCipher[i], encodedKey[i]);
        let min = Math.min(encodedCipher[i], encodedKey[i]);
        finalDecoded.push(45 - (max - min) + 1);
      } else {
        finalDecoded.push(encodedCipher[i] - encodedKey[i]);
      }
    }
    //put the decoded message into a string
    for (var i = 0; i < finalDecoded.length; i++) {
      compareDecoded += letters[finalDecoded[i]];
    }
    return compareDecoded;

    // console.log(encodedCipher);
    // console.log(encodedKey);
    // console.log(finalDecoded);
    // console.log(compareDecoded);
  } else {
    return "only lowercase and key must be equal or greater to msg";
  }
}

//generates a random 100 chars key
let randomCipher = (nb) => {
  let text = "";
  let possible = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < nb; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

//trigger encode with message and key from form
let onClickDoEncode = () => {
  let messageEncode = document.getElementById('messageEncode').value;
  let keyEncode = document.getElementById('keyEncode').value;
  let resultEncode = document.getElementById('resultEncode');
  if (messageEncode == "" || keyEncode == "") {
    console.log("enter something");
  } else {
      resultEncode.innerText = encode(messageEncode, keyEncode);
      console.log("encoded")
  }
}

//trigger decode with cipher and key from form
let onClickDoDecode = () => {
  let messageDecode = document.getElementById('messageDecode').value;
  let keyDecode = document.getElementById('keyDecode').value;
  let resultDecode = document.getElementById('resultDecode');
  if (messageDecode == "" || keyDecode == "") {
    console.log("enter something");
  } else {
    resultDecode.innerText = decode(messageDecode, keyDecode);
  }
}

let onClickGenerateRandom = () => {
  let keyEncode = document.getElementById('keyEncode').value;
  let messageEncode = document.getElementById('messageEncode').value;
  let showGenerated = document.getElementById('showGenerated');
  let messageEncodeArray = messageEncode.split('');
  let nb = messageEncodeArray.length;
  let random = randomCipher(nb);
  showGenerated.innerText = random;
  keyEncode += random;
}

let onClickShowLetters = () => {
  let showLetters = document.getElementById('showLetters');
  let buttonShowLetters = document.getElementById('buttonShowLetters');
  showLetters.innerText = letters ;
  showLetters.classList.toggle("invisible");
}



// let onClickBruteforce = () => {
//   let messageToBruteforce = document.getElementById('messageToBruteforce').value;
//   let buttonToBruteforce = document.getElementById('buttonToBruteforce');
//   let results = document.getElementById('results');
//   let arrayToBruteforce = messageToBruteforce.split("");
//   let temporaryArray = [];
//   for (var i = 0; i < lastChar.length; i++) {
//     for (var j = 0; j < letters.length; j++) {
//       let r = this.lastChar[i] + this.letters[j];
//       temporaryArray.push(r);
//     }
//   }
//   this.lastChar = temporaryArray;
//   this.allData = this.allData.concat(this.lastChar);
// }
