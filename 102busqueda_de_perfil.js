/*
Búsqueda de perfil
Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

Se ha escrito previamente una lookUpProfilefunción que toma namey una propiedad ( ) como argumentos.prop

La función debe verificar si namees un contacto real firstNamey la propiedad dada ( prop) es propiedad de ese contacto.

Si ambos son verdaderos, devuelve el "valor" de esa propiedad.

Si nameno corresponde a ningún contacto, devuelva la cadena No such contact.

Si propno corresponde a ninguna propiedad válida de un contacto que coincida, namedevuelva la cadena No such property.
*/

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++){
      if(contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";  
  }
  
  console.log(lookUpProfile("Bob", "number"));