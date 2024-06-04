/*
Acceder a las propiedades del objeto con variables
Otro uso de la notación entre corchetes en objetos es acceder a una propiedad que está almacenada como el valor de una variable. Esto puede resultar muy útil para recorrer las propiedades de un objeto o al acceder a una tabla de búsqueda.

A continuación se muestra un ejemplo del uso de una variable para acceder a una propiedad:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
La cadena Doberman se mostraría en la consola.

Tenga en cuenta que no usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque estamos usando el valor de la variable, no el nombre .
 */

/*
Establezca la playerNumber variable en 16. Luego, usa la variable para buscar el nombre del jugador y asígnalo player.
 */

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line