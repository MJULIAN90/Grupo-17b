let prueba = "Hola mundo";

console.log(`Que tal ${prueba}`);

let objet ={
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
}


let array =[1,2,3,4,5,6,7,8,9,10];

// for in -- se usa en objetos

for (let i in objet){
  // la i representa el nombre de la propiedad
  console.log(i);
  console.log(objet[i]);
}

// comman js

// forma de exportar
// module.exports = objet;


// forma de importar
// const objeto = require('./prueba.js');

// Modulos

// export default objet;
// export {objet, array};

// import objet from './prueba.js';
// import {objet, array} from './prueba.js';


let casa = 'casa'


console.log(casa.slice(1));