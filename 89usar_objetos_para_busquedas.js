/*

Usar objetos para búsquedas
Los objetos pueden considerarse como un almacenamiento de clave/valor, como un diccionario. Si tiene datos tabulares, puede utilizar un objeto para buscar valores en lugar de una switchdeclaración o una if/elsecadena. Esto es más útil cuando sabes que tus datos de entrada están limitados a un rango determinado.

A continuación se muestra un ejemplo de un objeto de artículo:

const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
articleAuthores la cadena Kaashan Hussain, articleLinkes la cadena https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/y valueLookupes la cadena How to create objects in JavaScript.

*/

/*
Convierta la declaración de cambio en un objeto llamado lookup. Úselo para buscar valy asignar la cadena asociada a la resultvariable.
 */

// Setup
function phoneticLookup(val) {
    var result = "";
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    // Only change code below this line
  
    // Only change code above this line
    return lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");