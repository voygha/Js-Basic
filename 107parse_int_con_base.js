/*
Utilice la función parseInt con una base
La parseInt()función analiza una cadena y devuelve un número entero. Se necesita un segundo argumento para la base, que especifica la base del número en la cadena. La base puede ser un número entero entre 2 y 36.

La llamada a la función se ve así:

parseInt(string, radix);
Y aquí hay un ejemplo:

const a = parseInt("11", 2);
La variable base dice que 11está en el sistema binario, o base 2. Este ejemplo convierte la cadena 11en un número entero 3.

Úselo parseInt()en la convertToIntegerfunción para que convierta un número binario en un número entero y lo devuelva.
*/


function convertToInteger(str) {
    return parseInt(str,2)
  }
  
  console.log(convertToInteger("10011"));