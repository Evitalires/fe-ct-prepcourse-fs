//Objetos globales en javascript
/* 
Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript
pueden extender sus propiedades y métodos.
El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a 
cualquier tipo de dato se denomina herencia.  
*/

Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
 };
  
 var arreglo = [1, 2, 3, 4, 5];
 var nuevoArreglo = arreglo.mayorQueTres();
 console.log(nuevoArreglo);

//

 class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};

    saludar() {
        console.log('Hola, mi pais favorito es: ' + this.paises[0]);
    }
};
 
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);
/* 
Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases.
De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias características, 
pero que compartan algunas otras generales. */

class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log(
          'Hola, mi nombre es  ' + this.nombre + '. Tengo  ' + this.edad
       );
    }
 }
 let martin = new Persona('Martin', 26);
 martin.saludar();

 class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(
          'Soy ' +
             this.nombre +
             ' . Codeo desde hace  ' +
             this.añosDeExperiencia +
             ' años'
       );
    }
 }
 
 let martino = new Persona('Martín', 26);
 let programador = new Programador('María', 37, 4);
 martino.saludar();
 programador.codear();



