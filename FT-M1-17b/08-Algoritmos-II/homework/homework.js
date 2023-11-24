'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // opcion 1
  // switch (array.length) {
  //   case 0:
  //     return [];
  //   case 1:
  //     return array;
  //   default:
  //     let pivote = array[0];
  //     let menores = [];
  //     let mayores = [];
  //     for (let i=1; i < array.length ; i++) {
  //       if (array[i] < pivote) {
  //         menores.push(array[i]);
  //       } else {
  //         mayores.push(array[i]);
  //       }
  //     }
  //     return quickSort(menores).concat(pivote, quickSort(mayores));
  // }

  // opcion 2
  // if (array.length === 0 || array.length === 1) return array; //casos de corte

  // var pivote = array.shift(); //eliminar y retornar primer elemento del array
  // var mayor = [] // array nuevo en el que se guardaran los elementor mayores
  // var menor = [] // array nuevo en el que se guardaran los elementor mayores

  // for (var i = 0; i <= array.length - 1; i++) { // recorrer el array sin llegar al ultimo elemento 
  //   if (array[i] < pivote) { // comparar el valor del sub indice contra mi valor de pivote
  //     menor.push(array[i]) // si es menor se va a [menor]
  //   } else {
  //     mayor.push(array[i]) // si es mayor se va a [mayor]
  //   }
  // }
  // mayor = quickSort(mayor) //RECURSION
  // menor = quickSort(menor) //RECURSION

  // return menor.concat(pivote).concat(mayor)

  // opcion 3
  if (array.length <= 1) {
    return array;
  }
  var pivotIndex = Math.floor(array.length / 2);
  var pivot = array.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora

  // opcion 1 con funciones split y pegar
  // if (array.length === 1) return array; //caso de corte

  // var division = split(array);
  // var izq = division[0];
  // var der = division[1];

  // return pegar(mergeSort(izq), mergeSort(der));

  // opcion 2 con funcion merge
  // if (array.length < 2) {
  //   return array;
  // }

  // const mid = Math.floor(array.length / 2);
  // const subLeft = mergeSort(array.slice(0, mid));
  // const subRight = mergeSort(array.slice(mid));

  // return merge(subLeft, subRight);

  // opcion 3 corta
  if (array.length <= 1) return array;

  let mitad = Math.floor(array.length / 2);
  let left = array.slice(0, mitad);
  let rigth = array.slice(mitad);

  const result = [];

  left = mergeSort(left);
  rigth = mergeSort(rigth);

  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      result.push(left.shift());
    }
    else result.push(rigth.shift());
  }

  return result.concat(left, rigth);
}

// opcion 2
function merge(node1, node2) {
  const result = [];
  while (node1.length > 0 && node2.length > 0) {
    result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
  }
  return result.concat(node1.length ? node1 : node2);

}

// opcion 1
function split(array) {
  var middle = Math.floor(array.length / 2);
  var izq = array.slice(0, middle);
  var der = array.slice(middle);

  return [izq, der];
}

function pegar(izq, der) {
  var paste = [];

  var IzqIndex = 0;
  var DerIndex = 0;

  while (izq.length > IzqIndex && der.length > DerIndex) {
    if (izq[IzqIndex] < der[DerIndex]) {
      paste.push(izq[IzqIndex]);
      IzqIndex++;
    } else {
      paste.push(der[DerIndex]);
      DerIndex++;
    }
  }
  return paste.concat(izq.slice(IzqIndex)).concat(der.slice(DerIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};


/* 
slice y split son dos métodos diferentes en JavaScript que se utilizan para manipular cadenas (strings) o arrays. Aquí hay una descripción de cada uno:

slice:

slice es un método que se utiliza principalmente en arrays y cadenas. En el contexto de cadenas, slice se utiliza para extraer una porción de la cadena.
En el caso de arrays, slice también se utiliza para crear una subarray extrayendo elementos de un array existente.
Ejemplo con cadena:

javascript
Copy code
const cadena = "Hello, World!";
const subcadena = cadena.slice(7, 12); // Extrae desde el índice 7 al 11 (no incluido)
console.log(subcadena); // Resultado: "World"
Ejemplo con array:

javascript
Copy code
const array = [1, 2, 3, 4, 5];
const subarray = array.slice(2, 4); // Extrae desde el índice 2 al 3 (no incluido)
console.log(subarray); // Resultado: [3, 4]
split:

split es un método que se utiliza exclusivamente en cadenas para dividirlas en arrays de substrings basándose en un delimitador especificado.
El resultado es un array que contiene los substrings resultantes de la división.
Ejemplo:

javascript
Copy code
const cadena = "Manzanas,Naranjas,Plátanos";
const arrayFrutas = cadena.split(","); // Divide la cadena en un array usando la coma como delimitador
console.log(arrayFrutas); // Resultado: ["Manzanas", "Naranjas", "Plátanos"]
En resumen, slice se utiliza para extraer partes de una cadena o array, mientras que split se utiliza para dividir una cadena en un array basándose en un delimitador. Son métodos útiles en situaciones diferentes según tus necesidades de manipulación de datos.
*/