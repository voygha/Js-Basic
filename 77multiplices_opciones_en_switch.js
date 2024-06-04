/**
 Múltiples opciones idénticas en declaraciones de cambio
Si la breakdeclaración se omite en una switchdeclaración case, las siguientes casedeclaraciones se ejecutan hasta que breakse encuentra a. Si tiene varias entradas con la misma salida, puede representarlas en una switchdeclaración como esta:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
 */


/**
 * 
 Escriba una declaración de cambio para establecer answer los siguientes rangos:
1-3- Low
4-6- Mid
7-9-High

Nota: Necesitará tener una case declaración para cada número del rango.

 */

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      case 2:
      case 3:
        answer="Low";
        console.log(answer);
        break;
      case 4:
      case 5:
      case 6:
        answer="Mid";
        console.log(answer);
        break;
      case 7:
      case 8:
      case 9:
        answer="High";
        console.log(answer);
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);