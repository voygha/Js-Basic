/*
Reemplazar bucles usando recursividad
La recursividad es el concepto de que una función se puede expresar en términos de sí misma. Para ayudar a comprender esto, comience pensando en la siguiente tarea: multiplicar los primeros nelementos de una matriz para crear el producto de esos elementos. Usando un forbucle, puedes hacer esto:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
Sin embargo, note eso multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Eso significa que puedes reescribir multiplyen términos de sí mismo y nunca necesitarás usar un bucle.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
La versión recursiva de multiplyse descompone así. En el caso base , donde n <= 0, devuelve 1. Para valores mayores de n, se llama a sí mismo, pero con n - 1. Esa llamada a función se evalúa de la misma manera, llamando multiplynuevamente hasta n <= 0. En este punto, todas las funciones pueden regresar y el original multiplydevuelve la respuesta.

Nota: Las funciones recursivas deben tener un caso base cuando regresan sin volver a llamar a la función (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.

Escriba una función recursiva sum(arr, n)que devuelva la suma de los primeros nelementos de una matriz arr.
*/

function sum(arr, n) {
    // Only change code below this line
    if(n <= 0){
      return 0;
    }
    else{
      return sum(arr, n-1) + arr[n-1];
    }
    // Only change code above this line
  }
  
  sum([4,8,12],6);