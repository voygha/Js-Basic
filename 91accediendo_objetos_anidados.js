/*
Accediendo a objetos anidados
Se puede acceder a las subpropiedades de los objetos encadenando la notación de punto o corchete.

Aquí hay un objeto anidado:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2sería la cadena secrets, y ourStorage.desk.drawersería la cadena stapler.
 */

/*
Acceda al myStorageobjeto y asigne el contenido de la glove boxpropiedad a la gloveBoxContentsvariable. Utilice la notación de puntos para todas las propiedades siempre que sea posible; de ​​lo contrario, utilice la notación entre corchetes.
 */

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  console.log(gloveBoxContents);