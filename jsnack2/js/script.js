/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
*/


let N = prompt("Inserisci il numero di array da creare");


for (let i = 0; i < N; i++) {
    let array = [];

    for (let j = 0; j < 10; j++) {
        array.push(Math.floor(Math.random()*100 +1));
    }
    console.log(array);
}