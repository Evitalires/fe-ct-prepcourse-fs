/* Las funciones callback son un tipo de funciones que se pasan por parámetro a otras funciones, 
en esta video clase aprenderemos que son y cómo usarlas a través de algunos ejemplos. */
function hacerAlgo(valor, callback) {
    console.log(`Haciendo algo con ${valor}`);
    callback();
 }
 
 function finalizar() {
    console.log("Listo!");
 }
 
 hacerAlgo("datos", finalizar);