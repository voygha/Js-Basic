/*
Acceder a las propiedades del objeto con notación de puntos
Hay dos formas de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), similar a una matriz.

La notación de puntos es lo que utiliza cuando conoce de antemano el nombre de la propiedad a la que intenta acceder.

A continuación se muestra un ejemplo del uso de la notación de puntos (.) para leer la propiedad de un objeto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val tendría un valor de la cadena val1 y prop2val tendría un valor de la cadena val2.
 */

/*
Lea los valores de propiedad del testObj uso de la notación de puntos. Establezca la variable hatValue igual a la propiedad del objeto hat y establezca la variable shirtValue igual a la propiedad del objeto shirt.


 */


// Setup
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line