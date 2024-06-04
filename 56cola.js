/*
Escribe una función nextInLineque tome una matriz ( arr) y un número ( item) como argumentos.

Agregue el número al final de la matriz, luego elimine el primer elemento de la matriz.

Luego, la nextInLinefunción debería devolver el elemento que se eliminó.

 */

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));