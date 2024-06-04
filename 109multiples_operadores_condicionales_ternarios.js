/*
Utilice múltiples operadores condicionales (ternarios)
En el desafío anterior, usaste un único operador condicional. También puede encadenarlos para verificar múltiples condiciones.

La siguiente función utiliza declaraciones if, else ify elsepara verificar múltiples condiciones:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
La función anterior se puede reescribir utilizando múltiples operadores condicionales:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
Se considera una buena práctica formatear varios operadores condicionales de modo que cada condición esté en una línea separada, como se muestra arriba. El uso de múltiples operadores condicionales sin la sangría adecuada puede dificultar la lectura del código. Por ejemplo:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
En la checkSignfunción, utilice varios operadores condicionales (siguiendo el formato recomendado utilizado en findGreaterOrEqual) para comprobar si un número es positivo, negativo o cero. La función debería devolver positive, negativeo zero.



*/

function checkSign(num) {
    return (num > 0 ) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
  }
  
  console.log(checkSign(0));