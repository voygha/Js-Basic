/*
En este ejemplo, inicializamos el valor de ourArrayen una matriz vacía y el valor de ien 5. Cuando ejecutamos el whilebucle, la condición se evalúa como falseno imenos de 5, por lo que no ejecutamos el código dentro del bucle. El resultado es que ourArrayno se le agregarán valores y seguirá teniendo el mismo aspecto que []cuando todo el código del ejemplo anterior haya terminado de ejecutarse. Ahora, eche un vistazo a un do...whilebucle:

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
En este caso, inicializamos el valor de ien 5, tal como lo hicimos con el whilebucle. Cuando llegamos a la siguiente línea, no hay ninguna condición para evaluar, así que vamos al código dentro de las llaves y lo ejecutamos. Agregaremos un solo elemento a la matriz y luego lo incrementaremos iantes de llegar a la verificación de condición. Cuando finalmente evaluamos la condición i < 5en la última línea, vemos que iahora es 6, lo que no pasa la verificación condicional, por lo que salimos del ciclo y listo. Al final del ejemplo anterior, el valor de ourArrayes [5]. Básicamente, un do...whilebucle garantiza que el código dentro del bucle se ejecutará al menos una vez. Intentemos hacer que do...whilefuncione un bucle enviando valores a una matriz.

 */

/*
Cambie el whilebucle en el código a un do...whilebucle para que el bucle envíe solo el número 10a myArrayy isea igual a 11cuando su código haya terminado de ejecutarse.
 */


// Setup
const myArray = [];
let i = 10;


do{
  myArray.push(i);
  i++;
} while (i < 10)

console.log(myArray);