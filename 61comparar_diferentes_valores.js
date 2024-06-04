/**
 * La compareEqualityfunción en el editor compara dos valores usando el operador de igualdad. Modifique la función para que devuelva la cadena Equalsolo cuando los valores sean estrictamente iguales.


 */

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");