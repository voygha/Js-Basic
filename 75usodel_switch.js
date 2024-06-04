/**
 * Seleccionar entre muchas opciones con declaraciones de cambio
Si necesita hacer coincidir un valor con muchas opciones, puede utilizar una declaración de cambio . Una switchdeclaración compara el valor con las declaraciones de caso que definen varios valores posibles. Cualquier declaración de JavaScript válida se puede ejecutar dentro de un bloque de casos y se ejecutará desde el primer casevalor coincidente hasta que breakse encuentre a.

Aquí hay un ejemplo de una switchdeclaración:

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
case los valores se prueban con estricta igualdad ( ===).El break dice a JavaScript que deje de ejecutar declaraciones. Si se break omite, se ejecutará la siguiente declaración.

 */

/**
 * Escriba una declaración de cambio que pruebe valy establezca answerlas siguientes condiciones:
1- alpha
2- beta
3- gamma
4-delta
 */

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
        console.log("alpha");
        answer ="alpha";
        break;
      case 2:
        console.log("beta");
        answer ="beta";
        break;
      case 3:
        console.log("gamma");
        answer ="gamma";
        break;
      case 4:
        console.log("delta");
        answer ="delta";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);