/**
 * 
 * Comparación con el operador mayor o igual que
El operador mayor o igual que ( >=) compara los valores de dos números. Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve true. De lo contrario, regresa false.

Al igual que el operador de igualdad, el operador mayor o igual a convertirá los tipos de datos mientras se compara.

Ejemplos

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
 */
//Agregue el operador mayor o igual a a las líneas indicadas para que las declaraciones de devolución tengan sentido.


function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);