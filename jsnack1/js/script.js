/*Crea un array vuoto e chiedi all’utente un numero da inserire 
nell’array. Continua a chiedere i numeri all’utente e a inserirli 
nell’array fino a quando la somma degli elementi è minore di 50.
*/

let array = [];
let somma = 0;

do{
    let numero = prompt("Inserisci un numero");
    array.push(numero);
    console.log("Il numero inserito è:", numero);
    somma += parseInt(numero);
}while(somma < 50);

console.log("la somma dei numeri inseriti ha superato il 50 ed è:", somma);
console.log(array);