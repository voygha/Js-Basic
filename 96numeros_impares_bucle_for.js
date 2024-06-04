/*
Iterar números impares con un bucle For
Los bucles For no tienen que iterarse uno a la vez. Cambiando nuestro final-expression, podemos contar por números pares.

Comenzaremos en i = 0y haremos un bucle while i < 10. Incrementaremos ien 2 cada bucle con i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArrayahora contendrá [0, 2, 4, 6, 8]. Cambiemos nuestro initializationpara poder contar con números impares.

 */

/*
Empuje los números impares del 1 al 9 para myArrayusar un forbucle.


 */

// Setup
const myArray = [];

// Only change code below this line
for (let i=1; i<10; i+=2){
  myArray.push(i);
}

console.log(myArray);