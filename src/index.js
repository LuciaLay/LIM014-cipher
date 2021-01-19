import cipher from './cipher.js';

console.log(cipher);

const alphabet = [
    "A","B","C","D","E","F",
    "G","H","I","J","K","L",
    "M","N","O","P","Q","R",
    "S","T","U","V","W","X",
    "Y","Z"
  ];
  
const form = document.getElementById("code");
const output = document.getElementById("coded");

form.addEventListener ("submit",event => {
    event.preventDefault();
    output.innerHTML = [... form.plaintext.value ].map(char => encode(char)).join('');
  }
  );

function encode(char) {
    const shift = Number(form.shift.value);
    if (alphabet.includes(char.toUpperCase()))
    { 
        const position = alphabet.indexOf(char.toUpperCase());
        const newPosition = (position + shift)%26;
        return alphabet[newPosition] 
      }
      else { return char }
      }
    