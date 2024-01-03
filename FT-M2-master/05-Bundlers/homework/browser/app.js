// (function () {
  // forma antigua de importar
  // var whiteboard = window.whiteboard;

  // forma de import con command js
// var whiteboard = require('./whiteboard');

// forma de importar con es6 modules
// importacion por default nombre de la variable puede ser cualquiera
import whiteboard, { hola, array} from './whiteboard';

console.log('hola');
// 
// var socket = window.io(window.location.origin);
var socket = require('socket.io-client');

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});
// })();


// cuando vamos a importar tenemos dos formas

// 1. importar por default
// import whiteboard from './whiteboard';

// 2. importar por nombre
// import { hola, array } from './whiteboard';

// cuando vamos a exportar tenemos dos formas

// 1. exportar por default
// export default whiteboard;

// 2. exportar por nombre
// export {
//   hola,
//   array
// };