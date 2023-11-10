'use strict';

// https://airtable.com/shrl4hERs4qjZkGCS
/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
// factorial de 5
// 5 * 4 * 3 * 2 * 1 = 120

function nFactorial(n) {

  // Opcion 1
  // if (n === 0 || n === 1) {
  //   return 1;
  // }

  // return n * nFactorial(n - 1);

  // Opcion 2

  // if(n <= 1 ){
  //   return 1;
  // }

  // return n * nFactorial(n - 1);

  // opcion 3

  // caso a evaluar ? opcion correcta : ocpion incorrecta
  return n <= 1 ? 1 : n * nFactorial(n - 1);
  // return n === 1 || n === 0 ? 1 : n * nFactorial(n - 1);
}
// FLujo de ejecucion de Nfactorial(5)

// ciclo 1
// n = 5
// 5 * nFactorial(4)
// ciclo 2
// n = 4
// 4 * nFactorial(3)
// ciclo 3
// n = 3
// 3 * nFactorial(2)
// ciclo 4
// n = 2
// 2 * nFactorial(1)
// ciclo 5
// n = 1



function nFibonacci(n) {

  // Opcion 1
  // if (n <= 1 ){
  //   return n;
  // }

  // return nFibonacci(n - 1) + nFibonacci(n - 2);

  // Opcion 2
  // if (n === 0) {
  //   return 0;
  // }

  // if (n === 1) {
  //   return 1;
  // }

  // return nFibonacci(n - 1) + nFibonacci(n - 2);

  // Opcion 3

  let array = [0,1]

  for (let i = 2; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2])
  }

  return array[n];
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// Metodos de un array 
// push -- agregar al final
// pop -- remover al final
// shift -- remover al inicio
// unshift -- agregar al inicio

// Con prototype
// function Queue() {
//   this.arr = [];
// }

// Queue.prototype.enqueue = function (value) {
//   return this.arr.push(value);
// }

// Queue.prototype.dequeue = function () {
//   return this.arr.shift();
// }

// Queue.prototype.size = function () {
//   return this.arr.length;
// }

// Con class
// class Queue {
//   constructor() {
//     this.arr = [];
//   }
//   enqueue(value) {
//     return this.arr.push(value);
//   }
//   dequeue() {
//     return this.arr.shift();
//   }
//   size() {
//     return this.arr.length;
//   }
// }

// con funciones

// function Queue() {
//   this.queue = [];

//   this.enqueue = function (item) {
//     this.queue.push(item);
//   }

//   this.dequeue = function () {
//     if (this.size() == 0) {
//       return undefined
//     }
//     return this.queue.shift()
//   }

//   this.size = function (item) {
//     return this.queue.length
//   }
// }

function Queue() {

  let array = [];

  function enqueue(value) {
    return array.push(value);
  }

  function dequeue() {
    return array.shift();
  }

  function size() {
    return array.length;
  }

  return {
    enqueue,
    dequeue,
    size
  }
}
/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
