/*
Manipulación de objetos complejos
A veces es posible que desee almacenar datos en una estructura de datos flexible . Un objeto JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas , números , valores booleanos , matrices , funciones y objetos .

A continuación se muestra un ejemplo de una estructura de datos compleja:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
Esta es una matriz que contiene un objeto en su interior. El objeto tiene varios metadatos sobre un álbum. También tiene una formatsmatriz anidada. Si desea agregar más registros de álbumes, puede hacerlo agregando registros a la matriz de nivel superior. Los objetos contienen datos en una propiedad, que tiene un formato clave-valor. En el ejemplo anterior, "artist": "Daft Punk"es una propiedad que tiene una clave de artisty un valor de Daft Punk.

Nota: Deberá colocar una coma después de cada objeto de la matriz, a menos que sea el último objeto de la matriz.
 */

/*
Agregue un nuevo álbum a la myMusicmatriz. Suma artisty titlecadenas, release_yearnúmeros y una formatsserie de cadenas.
 */

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Bon Jovi",
      "title": "My life",
      "release_year": 1980,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  
  