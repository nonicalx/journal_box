import { characters } from "./characters";

export const encryptText = (textToEncrypt) => {
  let value = 0;
  let hashValue = 0;

  let encryptedString = "";

  for (let i = 0; i < textToEncrypt.length; i++) {
    for (let j = 0; j < characters.length; j++) {
      const character = characters[j];
      const charToEncrypt = textToEncrypt[i];

      if (charToEncrypt === character) {
        value = j + 1;
        if (value % 2 === 0) {
          hashValue = value / 2;
          encryptedString += hashValue.toString() + "e" + " ";
        } else {
          hashValue = value * 3 + 1;
          encryptedString += hashValue.toString() + "o" + " ";
        }
      }
    }
  }

  return encryptedString;
};

export const decryptText = (cypher) => {
  let value = 0;
  let hashValue = 0;
  let decryptedText = "";

  const arrayOfCypher = cypher.split(" ");

  arrayOfCypher.forEach((hash) => {
    if (hash !== "") {
      const lastIndex = hash.length - 1;

      if (hash[lastIndex] === "e") {
        hashValue = 0;
        hashValue = parseInt(hash.substr(0, lastIndex));

        value = hashValue * 2 - 1;

        decryptedText += characters[value].toString();
      } else {
        hashValue = 0;

        hashValue = parseInt(hash.substr(0, lastIndex));

        value = (hashValue - 1) / 3 - 1;

        decryptedText += characters[value].toString();
      }
    }
  });
  return decryptedText;
};
