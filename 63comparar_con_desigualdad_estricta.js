/**
 * 
 * Comparación con el operador de desigualdad estricta
El operador de desigualdad estricta ( !==) es el opuesto lógico del operador de igualdad estricta. Significa "Estrictamente no igual" y regresa falsedonde regresaría la igualdad estricta truey viceversa . El operador de desigualdad estricta no convertirá tipos de datos.

Ejemplos

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
 */

//Agregue el operador de desigualdad estricta a la ifdeclaración para que la función devuelva la cadena Not Equalcuando valno sea estrictamente igual a17

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);