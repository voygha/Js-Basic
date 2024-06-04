/*
Acceder a las propiedades del objeto con notación entre corchetes
La segunda forma de acceder a las propiedades de un objeto es la notación entre corchetes ([]). Si la propiedad del objeto al que intenta acceder tiene un espacio en su nombre, deberá utilizar la notación entre corchetes.

Sin embargo, aún puede utilizar la notación entre corchetes en las propiedades de los objetos sin espacios.

A continuación se muestra un ejemplo del uso de la notación entre corchetes para leer la propiedad de un objeto:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"]sería la cadena Kirk, myObj['More Space'] sería la cadena Spocky myObj["NoSpace"] sería la cadena USS Enterprise.

Tenga en cuenta que los nombres de propiedades con espacios deben estar entre comillas (simples o dobles).

 */

/*
Lea los valores de las propiedades an entreey the drinkdel testObjuso de notación entre corchetes y asígnelos a entreeValuey drinkValuerespectivamente.
 */

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line