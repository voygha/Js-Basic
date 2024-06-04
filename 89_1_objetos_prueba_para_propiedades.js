/*
Algoritmos de JavaScript y estructuras de datos
JavaScript básico
Objetos de prueba para propiedades
Para comprobar si una propiedad en un objeto determinado existe o no, puede utilizar el .hasOwnProperty()método. someObject.hasOwnProperty(someProperty)devuelve trueo falsedependiendo de si la propiedad se encuentra en el objeto o no.

Ejemplo

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
La primera checkForPropertyllamada a función regresa true, mientras que la segunda regresa false.
 */


/*
Modifique la función checkObjpara probar si el objeto pasado al parámetro de función objcontiene la propiedad específica pasada al parámetro de función checkProp. Si la propiedad pasada checkPropse encuentra en obj, devuelve el valor de esa propiedad. Si no, regresa Not Found.


 */


function checkObj(obj, checkProp) {
    // Only change code below this line
    if( obj.hasOwnProperty(checkProp)){
      return obj[checkProp]
    }
    else{
      return "Not Found";
    }
    // Only change code above this line
  }
  
  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
  