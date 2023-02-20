//restrizioni per l'apprensimento
'use strict';

//prompt per Nome
const firstName = prompt('inserisci il tuo nome');


//prompt per Cognome
const secondName = prompt('inserisci il tuo cognome');

//prompt per Colore preferito
const color = prompt('inserisci il tuo colore preferito');

//Concatenamento informazioni inseriti
const info = `${firstName}${secondName}${color}`;

//Stampa su console info
console.log(info);

//Stampa info nel file di testo html all'interno di div
document.querySelector('div').innerHTML = info
