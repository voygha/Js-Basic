/*
Iterar con JavaScript para bucles
Puede ejecutar el mismo código varias veces mediante un bucle.

El tipo más común de bucle de JavaScript se llama forbucle porque se ejecuta una cantidad específica de veces.

Los bucles For se declaran con tres expresiones opcionales separadas por punto y coma:

for (a; b; c), donde aes la declaración de inicialización, bes la declaración de condición y ces la expresión final.

La declaración de inicialización se ejecuta solo una vez antes de que comience el ciclo. Normalmente se utiliza para definir y configurar la variable de bucle.

La declaración de condición se evalúa al comienzo de cada iteración del bucle y continuará mientras se evalúe true. Cuando la condición está falseal inicio de la iteración, el bucle dejará de ejecutarse. Esto significa que si la condición comienza como falsa, su bucle nunca se ejecutará.

La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente verificación de condición y generalmente se usa para incrementar o disminuir el contador del bucle.

En el siguiente ejemplo, inicializamos i = 0e iteramos mientras nuestra condición i < 5sea verdadera. Incrementaremos ien 1cada iteración del bucle como i++nuestra expresión final.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

ourArrayahora tendrá el valor [0, 1, 2, 3, 4].



 */

/*
Utilice un for bucle para empujar los valores del 1 al 5 en myArray.


 */

// Setup
const myArray = [];

// Only change code below this line


for(let a=1; a<6; a++){
  myArray.push(a);
}

console.log(myArray);