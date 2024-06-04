/*
Genere números enteros aleatorios con JavaScript
Puedes generar números decimales aleatorios con Math.random(), pero a veces necesitas generar números enteros aleatorios. El siguiente proceso le dará un número entero aleatorio menor que 20:

Úselo Math.random()para generar un número decimal aleatorio.
Multiplica ese número decimal aleatorio por 20.
Úselo Math.floor()para redondear este número a su número entero más cercano.
Recuerde que Math.random()nunca puede devolver a 1, por lo que es imposible obtenerlo 20ya que está redondeando hacia abajo con Math.floor(). Este proceso le dará un número entero aleatorio en el rango de 0a 19.

Juntando todo, así es como se ve tu código:

Math.floor(Math.random() * 20);
Estás llamando Math.random(), multiplicando el resultado por 20 y luego pasando el valor a Math.floor()para redondear el valor al número entero más cercano.

Utilice esta técnica para generar y devolver un número entero aleatorio en el rango de 0a 9.
*/

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }
  
  
  console.log(randomWholeNum());
  