var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)){
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) {
    const child = startEl.children[i];
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, child));
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  // console.log('selectorTypeMatcher quien es selector', selector);
  // .pagetitle
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";

  if (selector.includes(".")) return "tag.class";

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  // console.log('matchFunctionMaker quien es selector', selector);
  // matchFunctionMaker quien es selector price
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    // opcion 1
    // matchFunction = (ele) => { 
    //   if (ele.id === selector.slice(1)) return true;
    //   return false;
    // }

    // opcion 2
    matchFunction = (ele) => ele.id === selector.slice(1);

  } else if (selectorType === "class") {
    console.log();
    matchFunction = ele => ele.classList.contains(selector.slice(1))
  } else if (selectorType === "tag.class") {

    let [tag, className] = selector.split(".");

    matchFunction = ele => ele.classList.contains(className) && ele.tagName.toLowerCase() === tag.toLowerCase();
  } else if (selectorType === "tag") {
    matchFunction = ele => ele.tagName.toLowerCase() === selector.toLowerCase();
  }
  // console.log('devuelve ', matchFunction);
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
