/*
Algoritmos de JavaScript y estructuras de datos
JavaScript básico
Accediendo a matrices anidadas
Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como matrices anidadas. De manera similar al acceso a objetos anidados, la notación de corchetes de matriz se puede encadenar para acceder a matrices anidadas.

A continuación se muestra un ejemplo de cómo acceder a una matriz anidada:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1]sería la cadena Fluffy, y ourPets[1].names[0]sería la cadena Spot.

 */

/*
Usando notación de puntos y corchetes, establezca la variable secondTree en el segundo elemento de la list matriz desde el segundo objeto de la myPlants matriz.

 */

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  
  console.log(secondTree);