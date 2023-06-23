"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos básicos (aqui ocorre inferência de tipos)
let nome = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto = true; // true ou false
let simbolo = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint
// Arrays
let arrayDeNumeros = [1, 2, 3];
let arrayDeNumeros2 = [1, 2, 3];
let arrayDeStrings = ['a', 'b'];
let arrayDeStrings2 = ['a', 'b'];
// Objetos
let pessoa = {
    idade: 30,
    nome: 'Luiz'
};
// Funções
function soma(x, y) {
    return x + y;
}
const soma2 = (x, y) => x + y;
// Module mode
exports.default = 1;
