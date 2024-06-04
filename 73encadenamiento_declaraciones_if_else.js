/**
 * 
 * Encadenamiento de declaraciones If Else
if/elseLas declaraciones se pueden encadenar para lograr una lógica compleja. Aquí hay un pseudocódigo de múltiples declaraciones if/ encadenadas else if:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
 */


/**
 * 
 * ifEscriba declaraciones / encadenadas else ifpara cumplir las siguientes condiciones:

num < 5- regresar Tiny
num < 10- regresar Small
num < 15- regresar Medium
num < 20- regresar Large
num >= 20- regresarHuge

 */

function testSize(num) {
    // Only change code below this line
    if(num < 5){
      return "Tiny";
    }
    else if(num <10){
      return "Small";
    }
    else if(num < 15){
      return "Medium";
    }
    else if(num < 20){
      return "Large";
    }
    else{
      return "Huge";
    }
  
    
    // Only change code above this line
  }
  
  testSize(7);