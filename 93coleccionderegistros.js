/*
Colección de registros
Estás creando una función que ayuda en el mantenimiento de una colección de álbumes musicales. La colección está organizada como un objeto que contiene múltiples álbumes que también son objetos. Cada álbum está representado en la colección con un idnombre de propiedad único. Dentro de cada objeto de álbum, hay varias propiedades que describen información sobre el álbum. No todos los álbumes tienen información completa.

La updateRecordsfunción toma 4 argumentos representados por los siguientes parámetros de función:

records- un objeto que contiene varios álbumes individuales
id- un número que representa un álbum específico en el recordsobjeto
prop- una cadena que representa el nombre de la propiedad del álbum a actualizar
value- una cadena que contiene la información utilizada para actualizar la propiedad del álbum
Complete la función usando las reglas siguientes para modificar el objeto pasado a la función.
 */

/*
Su función siempre debe devolver el recordsobjeto completo.
Si valuees una cadena vacía, elimine la proppropiedad proporcionada del álbum.
Si propno lo es tracksy valueno es una cadena vacía, asígnalo valuea ese álbum prop.
Si propes tracksy valueno es una cadena vacía, pero el álbum no tiene una trackspropiedad, cree una matriz vacía y agréguela value.
Si prop es tracksy valueno es una cadena vacía, agréguela valueal final de la tracksmatriz existente del álbum.
 */


// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(value ===""){
      delete records[id][prop];
    }
    else if(prop !== "tracks" && value !== ""){
      records[id][prop] = value;
      console.log(records[id][prop] = value);
    }
    else if(prop === "tracks" && value !== ""){
      if(records[id][prop] === undefined){
        records[id][prop] = [];
        console.log(records[id][prop] = []);
      }
      records[id][prop].push(value);
      
    }
  
    
    console.log(records);
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');