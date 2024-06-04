/*
Iterar a través de una matriz con un bucle For
Una tarea común en JavaScript es recorrer en iteración el contenido de una matriz. Una forma de hacerlo es con un forbucle. Este código enviará cada elemento de la matriz arra la consola:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Recuerde que las matrices tienen indexación de base cero, lo que significa que el último índice de la matriz es length - 1. Nuestra condición para este bucle es i < arr.lengthque detiene el bucle cuando ies igual a length. En este caso, la última iteración es, i === 4es decir, cuando ise vuelve igual arr.length - 1y sale 6a la consola. Luego iaumenta a 5y el ciclo termina porque i < arr.lengthes false.
 */


/*
Declarar e inicializar una variable totalen 0. Utilice un forbucle para agregar el valor de cada elemento de la myArrmatriz total.


 */

// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;

// Only change code below this line


for(let i=0; i< myArr.length;i++){
  console.log(myArr[i]);
  total= total + myArr[i];
}

console.log(total);