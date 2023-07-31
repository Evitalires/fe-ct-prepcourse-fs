// Lista de compras
var listaDeCompras = [];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';
// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);
// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
console.log(nombres.length);
// push añade uno o más elementos al final de un arreglo
nombres = nombres.push('Jair');
// unshift agrega uno o más elementos al inicio de un arreglo
//nombres = nombres.unshift('verde');
// pop elimina y devuelve el último elemento de un arreglo.
//nombres = nombres.pop();
// shift elimina y devuelve el primer elemento de un arreglo.
//nombres = nombres.shift();
// includes
console.log(nombres.includes('Maria')); // Devuelve true

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);


// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);