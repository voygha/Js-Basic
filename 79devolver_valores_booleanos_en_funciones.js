/*
Devolver valores booleanos de funciones
Quizás recuerde de Comparación con el operador de igualdad que todos los operadores de comparación devuelven un valor booleano trueo false.

A veces la gente usa una if/elsedeclaración para hacer una comparación, como esta:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Pero hay una mejor manera de hacer esto. Dado que ===devuelve trueo false, podemos devolver el resultado de la comparación:

function isEqual(a, b) {
  return a === b;
}

 */

/*
Se corrigió la función isLess para eliminar las if/else declaraciones.
 */

function isLess(a, b) {
    // Only change code below this line
    console.log(a < b);
    return a < b;
    // Only change code above this line
  }
  
  isLess(10, 15);