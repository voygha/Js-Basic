/*
Contar hacia atrás con un bucle For
Un bucle for también puede contar hacia atrás, siempre que podamos definir las condiciones correctas.

Para disminuir en dos en cada iteración, necesitaremos cambiar nuestra inicialización, condición y expresión final.

Comenzaremos en i = 10y haremos un bucle while i > 0. Disminuiremos ien 2 cada bucle con i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArrayahora contendrá [10, 8, 6, 4, 2]. Cambiemos nuestra inicialización y expresión final para que podamos contar hacia atrás de dos en dos para crear una matriz de números impares descendentes.

 */
/*
Empuje los números impares del 9 al 1 para myArrayusar un for bucle.
 */

// Setup
const myArray = [];

// Only change code below this line

for(let i=9;i>0;i-=2){
  myArray.push(i)
}

console.log(myArray);