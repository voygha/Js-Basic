/**
 * Agregar una opción predeterminada en declaraciones de cambio
En una switchdeclaración, es posible que no pueda especificar todos los valores posibles como casedeclaraciones. En su lugar, puede agregar la defaultdeclaración que se ejecutará si no casese encuentran declaraciones coincidentes. Piense en ello como la elsedeclaración final de una if/elsecadena.

Una defaultdeclaración debería ser el último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
 */

/**
 * Escriba una declaración de cambio para establecer answerlas siguientes condiciones:
a- apple
b- bird
c- cat
default-stuff
 */

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "a":
        answer="apple";
        console.log(answer);
        break;
      case "b":
        answer="bird";
        console.log(answer);
        break;
      case "c":
        answer="cat";
        console.log(answer);
        break;
      default:
        answer = "stuff";
        console.log(answer);
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff("a");