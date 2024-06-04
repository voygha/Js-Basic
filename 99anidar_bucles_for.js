/*
Anidamiento de bucles
Si tiene una matriz multidimensional, puede usar la misma lógica que el punto de ruta anterior para recorrer tanto la matriz como cualquier submatriz. Aquí hay un ejemplo:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
Esto genera cada subelemento arruno a la vez. Tenga en cuenta que para el bucle interno, estamos verificando .lengthof arr[i], ya que arr[i]es en sí mismo una matriz.

 */

/*
Modifique la función multiplyAllpara que devuelva el producto de todos los números en las submatrices de arr.

 */

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i=0;i< arr.length;i++){
      for(let j=0; j< arr[i].length;j++){
        console.log(arr[i][j]);
        product= product * arr[i][j];
        
      }
    }
    // Only change code above this line
    console.log(product);
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  
  
  