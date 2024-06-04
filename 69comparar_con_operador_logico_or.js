/**
 * 
 * Comparaciones con el operador lógico Or
El operador lógico u|| ( ) devuelve truesi alguno de los operandos es true. De lo contrario, regresa false.

El operador lógico u se compone de dos símbolos de canalización: ( ||). Por lo general, esto se puede encontrar entre las teclas Retroceso e Intro.

El siguiente patrón debería resultarle familiar por los puntos de referencia anteriores.

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
Este código devolverá Yessi numestá entre 5y 10( 5e 10incluido). La misma lógica se puede escribir con el operador lógico u .

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";


 */

/**
 * Este código devolverá Yessi numestá entre 5y 10( 5e 10incluido). La misma lógica se puede escribir con el operador lógico u .


 */

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20 ) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);