const alphabet = [
  "A","B","C","D","E","F",
  "G","H","I","J","K","L",
  "M","N","O","P","Q","R",
  "S","T","U","V","W","X",
  "Y","Z" ];

  const alphabetB = [
    'Z','Y','X','W','V','U',
    'T','S','R','Q','P','O',
    'N','M','L','K','J','I',
    'H','G','F','E','D','C',
    'B','A'
  ];


const cipher = {

  encode: function(offset, char) {
     
 
    const shift = Number(offset);
    if (alphabet.includes(char.toUpperCase()))
    { 
        const position = alphabet.indexOf(char.toUpperCase());
        const newPosition = (position + shift)%26;
        return alphabet[newPosition] 
      }
      else { return char }
      },
 

decode: function(offset, char) {
        const shiftB = Number(offset);
        if (alphabetB.includes(char.toUpperCase()))
       { 
          const positionB = alphabetB.indexOf(char.toUpperCase());
          const newPositionB = (positionB + shiftB)%26;
          return alphabetB[newPositionB] 
        }
        else { return char }
        }
     
};


export default cipher;
