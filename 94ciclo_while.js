/*
Iterar con JavaScript mientras bucles
Puede ejecutar el mismo código varias veces mediante un bucle.

El primer tipo de bucle que aprenderemos se llama bucle whileporque se ejecuta mientras una condición específica es verdadera y se detiene cuando esa condición ya no es verdadera.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
En el ejemplo de código anterior, el whilebucle se ejecutará 5 veces y agregará los números del 0 al 4 ourArray.

Intentemos hacer que funcione un bucle while enviando valores a una matriz.

Agregue los números del 5 al 0 (inclusive) en orden descendente para myArrayusar un whilebucle.

Ejecute las pruebas (Ctrl + Enter)
Restablecer esta lección
Consigue ayuda
Pruebas
Espera :Deberías usar un whilebucle para esto.
Espera :myArraydebe ser igual [5, 4, 3, 2, 1, 0].
12345

 */

/*
Agregue los números del 5 al 0 (inclusive) en orden descendente para myArrayusar un whilebucle.
 */


// Setup
const myArray = [];
let a= 6;

while(a > 0){
  myArray.push(a-1);
  a--;
}


console.log(myArray);
// Only change code below this line
