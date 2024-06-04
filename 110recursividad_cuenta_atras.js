/*
Utilice la recursividad para crear una cuenta atrás
En un desafío anterior , aprendiste cómo usar la recursividad para reemplazar un forbucle. Ahora, veamos una función más compleja que devuelve una matriz de números enteros consecutivos desde 1el número pasado a la función.

Como se mencionó en el desafío anterior, habrá un caso base . El caso base le dice a la función recursiva cuándo ya no necesita llamarse a sí misma. Es un caso simple en el que ya se conoce el valor de retorno. También habrá una llamada recursiva que ejecuta la función original con diferentes argumentos. Si la función se escribe correctamente, eventualmente se alcanzará el caso base.

Por ejemplo, supongamos que desea escribir una función recursiva que devuelva una matriz que contenga los números 1hasta n. Esta función deberá aceptar un argumento, nque represente el número final. Luego necesitará llamarse a sí mismo con valores progresivamente más pequeños nhasta alcanzar 1. Podrías escribir la función de la siguiente manera:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
El valor [1, 2, 3, 4, 5]se mostrará en la consola.

Al principio, esto parece contradictorio ya que el valor de n disminuye , pero los valores en la matriz final aumentan . Esto sucede porque la inserción ocurre en último lugar, después de que haya regresado la llamada recursiva. En el punto donde nse inserta en la matriz, countup(n - 1)ya se ha evaluado y devuelto [1, 2, ..., n - 1].

Hemos definido una función llamada countdowncon un parámetro ( n). La función debe usar recursividad para devolver una matriz que contenga los números enteros nsegún 1el nparámetro. Si la función se llama con un número menor que 1, la función debería devolver una matriz vacía. Por ejemplo, llamar a esta función n = 5debería devolver la matriz [5, 4, 3, 2, 1]. Su función debe usar recursividad llamándose a sí misma y no debe usar bucles de ningún tipo.


*/

// Only change code below this line
function countdown(n){
    if(n < 1){
      return [];
    }
    else{
      const countArray = countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line
  
  console.log(countdown(5))