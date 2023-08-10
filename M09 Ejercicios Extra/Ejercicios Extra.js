/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { mayuscula } = require("../M08 JavaScript Callback/homework");

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let newArray = [];
   for (const key in objeto) {
      let value = objeto[key];
      newArray.push([key, value]);
   }
   return newArray;
   
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let stringOrdenado = string.split('').sort().join('');

   for (const letra of stringOrdenado) {
      if(objeto.hasOwnProperty(letra)) {
         //sumamos el contador de la letra
         objeto[letra]++;
      } else {
         //Si el objeto no tiene la letra, lo inicializamos
         objeto[letra] = 1;
      }
   }

   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let newString = '';
   let mayusculas = string.split('').filter(l => /[A-Z]/.test(l)).join('');
   let minuscula = string.split('').filter(l => /[a-z]/.test(l)).join('');
   
   return newString = mayusculas + minuscula;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabras = frase.split(' ');
   let asAmirror = '';

   for (const palabra of palabras) {
      asAmirror += palabra.split('').reverse().join('') + ' ';
      console.log(palabra.split('').reverse().join('') + ' ');
   }

   return asAmirror.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let isCapcua
   let reverseNumero = numero.toString().split('').reverse().join('');

   if(numero == reverseNumero) {
      isCapcua = "Es capicua";
   }
   else {
      isCapcua = "No es capicua";
   }

   return isCapcua;

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const regex = /[abc]/gi; //expresion regular global e insensitiva
   return string.replace(regex, '');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newArray = '';
   return newArray = arrayOfStrings.sort(
      (first, second) => first.length - second.length
      )
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let elementosComun = array1.filter(item => array2.includes(item));
   return elementosComun
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
