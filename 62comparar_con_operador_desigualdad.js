/**
 * 
 * Comparación con el operador de desigualdad
El operador de desigualdad ( !=) es lo opuesto al operador de igualdad. Significa no igual y regresa falsedonde regresaría la igualdad truey viceversa . Al igual que el operador de igualdad, el operador de desigualdad convertirá tipos de datos de valores mientras compara.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

 */

//Agregue el operador de desigualdad !=en la ifdeclaración para que la función devuelva la cadena Not Equalcuando valno sea equivalente a 99.


// Setup
function testNotEqual(val) {
    if (val !=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);