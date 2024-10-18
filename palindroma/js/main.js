console.log("JS OK");

// ! Palindroma
/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// esprimo le variabili
let userWord = prompt("Inserisci la parola");
let reversedWord = "";
console.log("Parola inserita:", userWord);

// esprimo la funzione
function checkPalindrome(userWord, reversedWord) {
  //ciclo for per invertire le parole
  for (let i = userWord.length - 1; i >= 0; i--) {
    reversedWord += userWord[i];
  }
  console.log("Parola invertita:", reversedWord);

  if (reversedWord === userWord) {
    console.log("La parola è palindroma");
    alert("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
    alert("La parola non è palindroma");
  }
}

// risultato finale
checkPalindrome(userWord, reversedWord);
