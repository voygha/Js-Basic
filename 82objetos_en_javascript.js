/*
Los objetos son similares a arrays, excepto que en lugar de usar índices para acceder y modificar sus datos, se accede a los datos de los objetos a través de lo que se llama properties.

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

Aquí hay un objeto gato de muestra:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
En este ejemplo, todas las propiedades se almacenan como cadenas, como name, legs y tails. Sin embargo, también puedes utilizar números como propiedades. Incluso puedes omitir las comillas para las propiedades de cadenas de una sola palabra, de la siguiente manera:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
Sin embargo, si su objeto tiene propiedades que no son cadenas, JavaScript las encasillará automáticamente como cadenas.
 */

/*
Cree un objeto que represente un perro llamado myDog que contenga las propiedades name(una cadena) legs, tails y friends.

Puede establecer estas propiedades de objeto en los valores que desee, siempre que namesea una cadena, legsnúmeros tailsy friendsuna matriz.
 */

const myDog = {
    // Only change code below this line
    "name": "Peluche",
    "legs": 4,
    "tails": 1,
    "friends": ["Humans", "Child"]
  
    // Only change code above this line
  };