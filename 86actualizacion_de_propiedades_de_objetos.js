/*
Actualización de propiedades de objetos
Una vez que haya creado un objeto JavaScript, puede actualizar sus propiedades en cualquier momento tal como actualizaría cualquier otra variable. Puede utilizar notación de puntos o corchetes para actualizar.

Por ejemplo, veamos ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Como es un perro particularmente feliz, cambiemos su nombre por el de cuerda Happy Camper. Así es como actualizamos la propiedad de nombre de su objeto: ourDog.name = "Happy Camper";o ourDog["name"] = "Happy Camper"; Ahora, cuando evaluamos ourDog.name, en lugar de obtener Camper, obtendremos su nuevo nombre Happy Camper,.
 */


/*
Actualice la myDogpropiedad del nombre del objeto. Cambiemos su nombre de Coder a Happy Coder. Puede utilizar notación de puntos o de corchetes.
 */

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.name= "Happy Coder";
  
  console.log(myDog);
  
  // Only change code below this line
  