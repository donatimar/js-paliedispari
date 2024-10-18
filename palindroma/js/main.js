console.log("JS OK");

// ! Palindroma
/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindrome() {
  let userWord = prompt("Inserisci la parola");
  let reversedWord = "";

  function checkPalindrome(userWord, reversedWord) {
    for (let i = userWord.length - 1; i >= 0; i--) {
      reversedWord += userWord[i];
    }

    if (reversedWord === userWord) {
      alert("La parola è Palindroma");
    } else {
      alert("La parola non è Palindroma");
    }
  }
  checkPalindrome(userWord, reversedWord);
}
