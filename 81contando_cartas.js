/*
Contando cartas
En el juego de casino Blackjack, un jugador puede determinar si tiene ventaja sobre la casa en la siguiente mano haciendo un seguimiento del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama Conteo de Cartas.

Que queden más cartas altas en el mazo favorece al jugador. A cada tarjeta se le asigna un valor según la siguiente tabla. Cuando el conteo es positivo, el jugador debe apostar alto. Cuando el conteo es cero o negativo, el jugador debe apostar bajo.

Cambio de conteo	Tarjetas
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
Escribirás una función de conteo de cartas. Recibirá un card parámetro, que puede ser un número o una cadena, e incrementará o disminuirá la count variable global según el valor de la tarjeta (ver tabla). Luego, la función devolverá una cadena con el recuento actual y la cadena Bet si el recuento es positivo, o Hold si el recuento es cero o negativo. El conteo actual y la decisión del jugador ( Beto Hold) deben estar separados por un solo espacio.

Salidas de ejemplo: -3 Hold o5 Bet


 */


/*
Sugerencia
NO restablezca counta 0 cuando el valor sea 7, 8 o 9.
NO devuelva una matriz.
NO incluya comillas (simples o dobles) en el resultado.
 */

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');