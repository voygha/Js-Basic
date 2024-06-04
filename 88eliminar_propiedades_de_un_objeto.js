/*
Eliminar propiedades de un objeto JavaScript

También podemos eliminar propiedades de objetos como este:

delete ourDog.bark;
Ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Después de la última línea que se muestra arriba, ourDogse ve así:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
 */

//Eliminar la tailspropiedad de myDog. Puede utilizar notación de puntos o de corchetes.


// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  delete myDog.tails;
  console.log(myDog);
  
  // Only change code below this line
  