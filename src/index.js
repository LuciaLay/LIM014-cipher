import cipher from './cipher.js';

console.log(cipher);

const alphabet = [
    "A","B","C","D","E","F",
    "G","H","I","J","K","L",
    "M","N","O","P","Q","R",
    "S","T","U","V","W","X",
    "Y","Z"
  ];
  
const form = document.forms[0];
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
    



      const alphabetB = [
        'Z','Y','X','W','V','U',
        'T','S','R','Q','P','O',
        'N','M','L','K','J','I',
        'H','G','F','E','D','C',
        'B','A'
      ];
      const formB = document.forms[1];
      const outputB = document.getElementById('decoded');
       
      
      
      formB.addEventListener ('submit',event => {
        event.preventDefault();
        outputB.innerHTML = [... formB.plaintextB.value ].map(char => decode(char)).join('');
      }
      );
      
      function decode(char) {
        const shiftB = Number(formB.shiftB.value);
        if (alphabetB.includes(char.toUpperCase()))
       { 
          const positionB = alphabetB.indexOf(char.toUpperCase());
          const newPositionB = (positionB + shiftB)%26;
          return alphabetB[newPositionB] 
        }
        else { return char }
        }
      