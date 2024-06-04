/*
Utilice lógica condicional con declaraciones If
ifLas declaraciones se utilizan para tomar decisiones en código. La palabra clave ifle dice a JavaScript que ejecute el código entre llaves bajo ciertas condiciones, definidas entre paréntesis. Estas condiciones se conocen como Booleancondiciones y sólo pueden ser trueo false.

Cuando la condición se evalúa como true, el programa ejecuta la declaración dentro de las llaves. Cuando la condición booleana se evalúa como false, la declaración dentro de las llaves no se ejecutará.

Pseudocódigo

si ( la condición es verdadera ) {
  se ejecuta la declaración
}
Ejemplo

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

test(true)devuelve la cadena It was truey test(false)devuelve la cadena It was false.

 */


/*
Cree una ifdeclaración dentro de la función para devolver Yes, that was truesi el parámetro wasThatTruelo es truey devolver No, that was falseen caso contrario.


 */
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue){
      return "Yes, that was true";
    
    }
    return "No, that was false";
  
  
  
    // Only change code above this line
  
  }
  
  trueOrFalse(true);
  
  