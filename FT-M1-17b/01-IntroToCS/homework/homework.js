'use strict';
// https://airtable.com/shrl4hERs4qjZkGCS

function BinarioADecimal(num) {
   // Binario a decimal
   // 1010
   // [1, 0, 1, 0]
   // 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0
   // 8 + 0 + 2 + 0
   // 10

   // Opcion 1
   // let suma = 0;
   // console.log(num);
   // for (let i = 0; i < num.length; i++) {
   //    console.log('num[i]',num[i]);
   //    let potencia = num.length - 1 - i;
   //    console.log('potencia', potencia);
   //    suma = suma + num[i] * 2 ** potencia;
   //    console.log('suma', suma);
   //    console.log('----------------');
   // }
   // console.log(suma);
   // return suma;

   // Opcion 2

   // return parseInt(num,2);

   // Opcion 3

   // split hace
   // 1010
   // [1, 0, 1, 0]
   var binaryStr = num.toString().split("").reverse().join("");
   var decimal = 0;
   for (var i = 0; i < binaryStr.length; i++) {
      var number = binaryStr[i] * (2 ** i);

      decimal += number;
      // decima = decimal + number;
   }

   return parseFloat(decimal);
}

// Forma para ejecutar una funcion y prboarla dentro del archivo
// BinarioADecimal('1010');

function DecimalABinario(num) {
   // Decima a binario
   // 10
   // 10 /2 = 5 y sobra 0
   // 5 / 2 = 2 y sobra 1
   // 2 / 2 = 1 y sobra 0
   // 1 / 2 = 0 y sobra 1
   // 1010

   // Opcion 1
   // let binario = '';

   // while (num > 0) {
   //    console.log('num', num);
   //    console.log('modulo', num % 2);

   //    binario = (num % 2) + binario;
   //    console.log('binario', binario);

   //    num = Math.floor(num / 2);
   //    console.log('num', num);

   //    console.log('----------------');
   // }
   // console.log('binario', binario);
   // return binario;

   // Opcion 2
   // return num.toString(2);

   // Opcion 3
   let binario = "";
   while (num > 0) {
      console.log('num', num);
      binario += num % 2;

      console.log('binario', binario);
      num = Math.floor(num / 2);
   }
   console.log('binario', binario);
   return binario.split("").reverse().join("");
}

// DecimalABinario(10);

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
