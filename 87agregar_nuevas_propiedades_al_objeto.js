/*
Agregar nuevas propiedades a un objeto JavaScript

Puede agregar nuevas propiedades a objetos JavaScript existentes de la misma manera que los modificaría.

Así es como agregaríamos una barkpropiedad a ourDog:

ourDog.bark = "bow-wow";
o

ourDog["bark"] = "bow-wow";
Ahora, cuando evaluemos ourDog.bark, obtendremos su ladrido bow-wow.

Ejemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
 */

/*
Agregue una bark propiedad myDog y configúrela en un sonido de perro, como "guau". Puede utilizar notación de puntos o de corchetes.
 */
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark= "guau";
  
  console.log(myDog);
  
  