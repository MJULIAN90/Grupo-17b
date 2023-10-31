// # Homework JavaScript Avanzado I

// ## Scope & Hoisting

// Determiná que será impreso en la consola, sin ejecutar el código.

// > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// ```javascript
// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); // 10 - 
//    console.log(a); // 5 - 8 es 8
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b); // 8
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b); // 9 
// };
// c(8, 9, 10);
// console.log(b); // 10
// console.log(x); // 1
// ```

//   ```javascript
// console.log(bar); // undefined
// console.log(baz); // error
// foo(); // Hola!
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// baz = 2;

//  si no tiene declara con var o let simplemente se crea una variable local
// console.log(baz);
// ```

//   ```javascript
// var instructor = 'Tony';
// if (true) {
//    var instructor = 'Franco';
// }
// console.log(instructor);
// ```

//   ```javascript
// var instructor = 'Tony';
// console.log(instructor);
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor);// Franco
//    }
// })();
// console.log(instructor);// Tony
// ```

//   ```javascript
// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor);// The Flash
//    console.log(pm); // Reverse Flash
// }
// console.log(instructor); // The Flash - Tony - es The flash
// console.log(pm); //franco - Reverse flash // es franco
// ```

// ### Coerción de Datos

// ¿Cuál crees que será el resultado de la ejecución de estas operaciones ?:

//   ```javascript
// 6 / "3"
// console.log(6 / "3"); // 2 
// console.log('6' / 3); // 2 

// "2" * "3"
// console.log("2" * "3"); // 6
// 4 + 5 + "px" // 9px - 45px
// console.log(4 + 5 + "px"); // 9px
// "$" + 4 + 5
// console.log("$" + 4 + 5); // $45 
// "4" - 2
// console.log("4" - 2); // 2
// "4px" - 2
// console.log("4px" - 2); // NaN
// 7 / 0
// console.log(7 / 0); // Infinity
// {}[0]
// console.log({}[0]); // undefined
// parseInt("09")
// console.log(parseInt("09")); // 9
// console.log(parseInt("090")); // 90
// console.log(parseInt("09a")); // 9
// console.log(parseInt("09a1")); // 9 -- hasta donde llega el primer error solo daria 9

// 5 && 2
// console.log(5 && 2); // 2
// 2 && 5
// console.log(2 && 5 && 3 && 0); // 5
// console.log(0 && 5); // 0
// console.log(2 && 5 && 3 && 0); // 

// 5 || 0
// console.log(5 || 0); // 5
// console.log(5 || 1); // 1
// 0 || 5
// console.log(0 || 5); // 5
// [3]+[3]-[10] -- -4, 
// '3' + '3' = 33 -10 = 23
// console.log([3] + [3] - [10]); // 33-10 = 23
// 3>2>1
// console.log(3 > 2 > 1); // false
// [] == ![]
// console.log([] == ![]); // true
// 
//   > Si te quedó alguna duda repasá con[este artículo](http://javascript.info/tutorial/object-conversion).

// ```

//   > Si te quedó alguna duda repasá con[este artículo](http://javascript.info/tutorial/object-conversion).

// ### Hoisting

// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//       ```javascript
// function test() {
//    console.log(a); // undefined
//    console.log(foo()); //2

//    var a = 1;
//   // console.log(a); // 1

//    function foo() {
//       return 2;
//    }
// }

// test();

// test();
// ```

//     Y el de este código?:

//       ```javascript
// var snack = 'Meow Mix';

// function getFood(food) {
//    if (food) {
//       var snack = 'Friskies';
//       return snack;
//    }
//    return snack;
// }
 
// console.log(getFood(false));
// ```

// ### This

// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

//       ```javascript
// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//         // console.log(this); // prop
//          return this.fullname;
//       },
//    },
// };

// // console.log(obj.prop.getFullname()); // Natalia Nerea - Aurelio De Rosa

// var test = obj.prop.getFullname;
// var test2 = obj.prop.getFullname();

// console.log(test()); // Aurelio De Rosa -- es undefined
// console.log(test2); // 
// ```

// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

// ```javascript
// function printing() {
//    console.log(1);
//    setTimeout(function () {
//       console.log(2);
//    }, 1000);
//    setTimeout(function () {
//       console.log(3);
//    }, 0);
//    console.log(4);
// }

// printing(); 
// 1 3 4 2
// 1 4 3 2
// ```

// </br >

//   ---

// ## **✅ FEEDBACK **

// ### Usa este[** formulario **](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
