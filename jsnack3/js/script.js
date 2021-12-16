/*
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

const divDispari = document.createElement("div");
const divPari = document.createElement("div");
let numeroDelDiv;

for (let i = 0; i < array.length; i++) {

    numeroDelDiv = document.createTextNode(array[i] + " ");

    if (array[i] % 2 == 0) {
        divPari.appendChild(numeroDelDiv);
    }else{
        divDispari.appendChild(numeroDelDiv);
    }
    
}

divPari.style.backgroundColor = "green";
divDispari.style.backgroundColor = "red";

document.body.appendChild(divPari);
document.body.appendChild(divDispari);


