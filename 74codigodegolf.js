/**
 * 
 * 
 * Código de golf
En el juego de golf, cada hoyo tiene un número par, es decir, el número promedio que strokesse espera que haga un golfista para hundir la bola en el hoyo y completar la jugada. Dependiendo de qué tan arriba o abajo parestés strokes, hay un apodo diferente.

Se pasará su función pary strokesargumentos. Devuelve la cadena correcta según esta tabla que enumera los trazos en orden de prioridad; de arriba (más alto) a abajo (más bajo):

Trazos	Devolver
1	"¡Hoyo en uno!"
<= par - 2	"Águila"
par - 1	"Pajarito"
par	"Par"
par + 1	"Espectro"
par + 2	"Doble fantasma"
>= par + 3	"¡Vete a casa!"

 */

//par y strokes siempre será numérico y positivo. Hemos agregado una variedad de todos los nombres para su conveniencia.


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if(strokes == 1){
    console.log("Hole-in-one!");
    return "Hole-in-one!";
  }
  else if(strokes <= par-2){
    console.log("Eagle");
    return "Eagle";
  }
  else if(strokes == par-1){
    console.log("Birdie");
    return "Birdie";
  }
  else if(strokes == par){
    console.log("Par");
    return "Par";
  }
  else if(strokes == par+1){
    console.log("Bogey");
    return "Bogey";
  }
  else if(strokes == par+2){
    console.log("Double Bogey");
    return "Double Bogey";
  }
  else if(strokes >= par+3){
    console.log("Go Home!");
    return "Go Home!";
  }
}

golfScore(4, 7);



