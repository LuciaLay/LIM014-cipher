import cipher from './cipher.js';

console.log(cipher);

  
const form = document.forms[0];
const output = document.getElementById("coded");

  form.addEventListener ("submit",event => {
    event.preventDefault();
    output.innerHTML = [... form.plaintext.value ].map(char => cipher.encode(form.offset.value, char)).join('');
    
}
);



   
    const formB = document.forms[1];
    const outputB = document.getElementById('decoded');
     
    
    
    formB.addEventListener ('submit',event => {
      event.preventDefault();
      outputB.innerHTML = [... formB.plaintextB.value ].map(char => cipher.decode(form.offset.value, char)).join('');
    }
    );
    
   
      
    
      