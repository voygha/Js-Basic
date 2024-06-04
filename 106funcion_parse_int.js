/*
Utilice la función parseInt
La parseInt()función analiza una cadena y devuelve un número entero. He aquí un ejemplo:

const a = parseInt("007");
La función anterior convierte la cadena 007al número entero 7. Si el primer carácter de la cadena no se puede convertir en un número, devuelve NaN.

Úselo parseInt()en la convertToIntegerfunción para que convierta la cadena de entrada stren un número entero y la devuelva.
*/

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56"));