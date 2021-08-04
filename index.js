const valor = new Array;
let value;

function getNumber(value) {
    valor.push(value);
    console.log(valor);
   /* document.getElementById('valuePrint').innerHTML('valor')*/
}

function createValue() {
    value = Number(valor.join(''));
    console.log(value);

        while(valor.length != 0){
              valor.pop();
          }

    console.log(valor);
}
/* Agregar otro parametro para realizar suma */
function sumaryFunction(valor1, valor2) {
    console.log(valor1+valor2);
    return valor1+valor2;
}
function resetArray(valor) {
  
}