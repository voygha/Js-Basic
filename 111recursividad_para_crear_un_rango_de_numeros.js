/*
Utilice la recursividad para crear un rango de números
Continuando con el desafío anterior, le brindamos otra oportunidad de crear una función recursiva para resolver un problema.

Hemos definido una función nombrada rangeOfNumberscon dos parámetros. La función debe devolver una matriz de números enteros que comienza con un número representado por el startNumparámetro y termina con un número representado por el endNumparámetro. El número inicial siempre será menor o igual que el número final. Su función debe usar recursividad llamándose a sí misma y no usar bucles de ningún tipo. También debería funcionar en los casos en los que ambos startNumy endNumson iguales.
*/

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  };