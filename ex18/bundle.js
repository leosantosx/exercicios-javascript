"use strict";

// REST
var soma = function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}; //console.log(`Soma: ${soma(20, 20)}`);
// SPREAD


var arr = [1, 2, 3, 4];
var x = arr[0],
    y = arr.slice(1); //console.log(x, y);
// Object Short Syntax

var nome = 'Diego';
var idade = 23;
var usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
console.log(usuario);
