console.log("JS OK");

// ! Pari e Dispari
/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// funzione per scegliere pari o dispari
function generateRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// funzione per generare un numero da 1 a 5
function isEvenOrOdd(number) {
  return number % 2 === 0 ? "pari" : "dispari";
}

// esprimo le variabili
const userChoice = prompt("Scegli 'pari' o 'dispari'");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// scegli pari o dispari
// scegli un numero da 1 a 5
// genero un numero da 1 a 5 per il computer
// sommo il numero dell'utente con il numero del computer
// determino se la somma è pari o dispari
// dichiaro chi ha vinto
