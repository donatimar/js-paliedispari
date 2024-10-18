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

// scegli pari o dispari e un numero da 1 a 5
const userChoice = prompt("Scegli 'pari' o 'dispari'");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// verifico che gli input immessi siano corretti
if (userChoice !== "pari" && userChoice !== "dispari") {
  console.error("Devi scegliere 'pari' o 'dispari'");
} else if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
  console.error("Il numero deve essere un valore compreso tra 1 e 5");
} else {
  // genero un numero da 1 a 5 per il computer
  const computerNumber = generateRandomNumber();
  console.log("Numero del computer:", computerNumber);

  // sommo il numero dell'utente con il numero del computer
  const sum = userNumber + computerNumber;
  console.log("Somma dei numeri dell'utente e del computer", sum);

  // determino se la somma è pari o dispari
  const sumEvenorOdd = isEvenOrOdd(sum);
  console.log("La somma è:", sumEvenorOdd);

  // dichiaro chi ha vinto
  if (
    (userChoice === "pari" && sumEvenorOdd === "pari") ||
    (userChoice === "dispari" && sumEvenorOdd === "dispari")
  ) {
    console.log("L'utente vince");
  } else {
    console.log("L'utente perde");
  }
}
