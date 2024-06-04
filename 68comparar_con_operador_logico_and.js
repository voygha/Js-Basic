/**
 * 
 * Algoritmos de JavaScript y estructuras de datos
JavaScript básico
Comparaciones con el operador lógico y
A veces necesitarás probar más de una cosa a la vez. El operador lógico y&& ( ) devuelve truesi y sólo si los operandos a su izquierda y derecha son verdaderos.

Se podría lograr el mismo efecto anidando una ifdeclaración dentro de otra if.

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
Este código devolverá Yessi numes mayor que 5y menor que 10. La misma lógica se puede escribir con el operador lógico y .

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
 */

//Reemplace las dos declaraciones if con una declaración, usando el &&operador, que devolverá la cadena Yesif vales menor o igual 50y mayor o igual que 25. De lo contrario, devolverá la cadena No.


function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >=25) {
      return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);