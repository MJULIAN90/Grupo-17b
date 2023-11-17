'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
   this.length = 1;
}

// Opcion 1
// BinarySearchTree.prototype.size = function() {
//    return this.length;
// };

// Opcion 2
BinarySearchTree.prototype.size = function () {
   if(!this.left && !this.right) return 1;

   if (!this.left) return 1 + this.right.size();
   if (!this.right) return 1 + this.left.size();

   return 1 + this.left.size() + this.right.size();
};

// Opcion 1
BinarySearchTree.prototype.insert = function (value) {
   let newNode = new BinarySearchTree(value);

   if (value < this.value) {
      if (this.left) {
         this.left.insert(value);
      } else {
         this.length ++;
         this.left = newNode;
      }
   } else {
      if (this.right) {
         this.right.insert(value);
      } else {
         this.length ++;
         this.right = newNode;
      }
   }
 };

// opcion 1
BinarySearchTree.prototype.contains = function (value) {

   if (value === this.value) return true;

   if (value < this.value){
      if (this.left) return this.left.contains(value);
   } 
   else {
      if (this.right) return this.right.contains(value);
   }

   return false;
}

// opcion 1
// BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

//    switch (order) {
//       case 'pre-order':
//          cb(this.value);
//          if (this.left) this.left.depthFirstForEach(cb, order);
//          if (this.right) this.right.depthFirstForEach(cb, order);
//          break;
//       case 'post-order':
//          if (this.left) this.left.depthFirstForEach(cb, order);
//          if (this.right) this.right.depthFirstForEach(cb, order);
//          cb(this.value);
//          break;
//       default:
//          if (this.left) this.left.depthFirstForEach(cb, order);
//          cb(this.value);
//          if (this.right) this.right.depthFirstForEach(cb, order);
//          break;
//    }
// }

// opcion 2
// BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

//    if (order === 'pre-order') {
//       cb(this.value);
//       if (this.left) this.left.depthFirstForEach(cb, order);
//       if (this.right) this.right.depthFirstForEach(cb, order);
//    } else if (order === 'post-order') {
//       if (this.left) this.left.depthFirstForEach(cb, order);
//       if (this.right) this.right.depthFirstForEach(cb, order);
//       cb(this.value);
//    } else {
//       if (this.left) this.left.depthFirstForEach(cb, order);
//       cb(this.value);
//       if (this.right) this.right.depthFirstForEach(cb, order);
//    }
// }

// opcion 3
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

   const cases = {
      'pre-order': () => {
         cb(this.value);
         if (this.left) this.left.depthFirstForEach(cb, order);
         if (this.right) this.right.depthFirstForEach(cb, order);
      },
      'post-order': () => {
         if (this.left) this.left.depthFirstForEach(cb, order);
         if (this.right) this.right.depthFirstForEach(cb, order);
         cb(this.value);
      },
      'in-order': () => {
         if (this.left) this.left.depthFirstForEach(cb, order);
         cb(this.value);
         if (this.right) this.right.depthFirstForEach(cb, order);
      }
   }
   cases[order || 'in-order']();

   // switch (order) {
   //    case 'pre-order':
   //       cb(this.value);
   //       if (this.left) this.left.depthFirstForEach(cb, order);
   //       if (this.right) this.right.depthFirstForEach(cb, order);
   //       break;
   //    case 'post-order':
   //       if (this.left) this.left.depthFirstForEach(cb, order);
   //       if (this.right) this.right.depthFirstForEach(cb, order);
   //       cb(this.value);
   //       break;
   //    default:
   //       if (this.left) this.left.depthFirstForEach(cb, order);
   //       cb(this.value);
   //       if (this.right) this.right.depthFirstForEach(cb, order);
   //       break;
   // }
}


// opcion 1
// BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = [] ) {

//    console.log('cb', cb);
//    console.log('this', this);
//    console.log('array', array);

//    cb(this.value);
//    if (this.left) array.push(this.left)
//    if (this.right) array.push(this.right)

//    let next = array.shift()
//    if (next) next.breadthFirstForEach(cb, array)
// }

BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
   let queue = [this];
   while (queue.length > 0) {
      let current = queue.shift();
      callback(current.value);
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
   }
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
