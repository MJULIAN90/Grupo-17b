var obj = {
    name: 'John',
}

var a = 1


// Formas de usar console.log

//? Estas dos formas no consologea variables no primitivas
// console.log('Hola' + a );
// console.log('hola2'  + obj);

// console.log(`Hola ${a} `);
// console.log(`Hola ${obj} `);

//? Estas dos formas si consologea tanto variables primitivas como no primitivas

// console.log('Hola', a);
// console.log('Hola', obj);

// console.log({a});
// console.log({obj});

// -----------------------------------------------

// console.log(a);
// console.log(c);


// let obj2 = {...obj}
// obj2.lastName = 'Doe'

// console.log(obj2.name);
// console.log(obj.lastName);

// --------------------------------------------

// IIFE
// (function (par) {
//   return 'Hola ' + par
// })('pedro')

// function hola () {
//   return 'Hola '
// }

// console.log('index', index);
// for (let index = 1; index < array.length; index++) {

//   if (index === 5) {
//     console.log('index for', index);
//   } else {
//     var otro = 10
//     console.log('index else', otro);
//   }

//   const element = array[index];
  
// }


