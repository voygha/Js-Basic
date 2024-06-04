/*
Utilice el operador condicional (ternario)
El operador condicional , también llamado operador ternario , se puede utilizar como una expresión if-else de una línea.

La sintaxis es a ? b : c, donde aestá la condición, bes el código que se ejecutará cuando la condición regrese truey ces el código que se ejecutará cuando la condición regrese false.

La siguiente función utiliza una if/elsedeclaración para verificar una condición:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
Esto se puede reescribir usando el operador condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
Utilice el operador condicional en la checkEqualfunción para comprobar si dos números son iguales o no. La función debe devolver la cadena Equalo la cadena Not Equal.
*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal"
  }
  
  console.log(checkEqual(2, 2));