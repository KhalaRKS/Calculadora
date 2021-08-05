const valor = new Array;
/*Valores de los operandos en la calculadora */
let value=0;
let value2=0;
let value3=0;
/*Valor de la accion a realizar con los operandos */
let actionValue;
/* Verifica si la acción a realizar en la calculadora 
es la misma, para proceder con el resultado de los valores*/
let plusRepiter=0;
let minusRepiter=0;
let multiRepiter=0;
let divRepiter=0;

const monitorPrintCalculator = document.getElementById('valuePrint');
function getNumber(value) {
    valor.push(value);
    value3 = Number(valor.join(''));
    monitorPrintCalculator.innerHTML = value3;
    console.log(valor);
   /* document.getElementById('valuePrint').innerHTML('valor')*/
}
function deleteLastNumber() {
    valor.pop();
    value3 = Number(valor.join(''));
    monitorPrintCalculator.innerHTML = value3;
}
function createValue() {
    if(value){
        value2 = Number(valor.join(''));
        console.log(value2, "variable 2");
    }else{
        value = Number(valor.join(''));
        console.log(value, "variable 1");
    }
    while(valor.length != 0){
        valor.pop();
    }

}
/*Esta función determina el tipo de operador a utilizar */
function action(plus=undefined,minus=undefined,multiply=undefined,divide=undefined) {
    if(plus !=null && (minus == null || multiply == null || divide == null)){
        actionValue=plus;
        plusRepiter++;
        console.log(plusRepiter);
    }else if(minus !=null && (plus == null || multiply == null || divide == null)){
        actionValue=minus;
        minusRepiter++;
    
    }else if(multiply !=null && (minus == null || plus == null || divide == null)){
        actionValue=multiply;
        multiRepiter++;
    }else if(divide !=null && (minus == null || multiply == null || plus == null)){
        actionValue=divide;
        divRepiter++;
    }
}
function sumaryFunction() {
    if(plusRepiter < 1){
        return;

    }else if(plusRepiter >= 2){
        let newValue = value+value2;
        console.log(newValue);
        plusRepiter = 0;
        monitorPrintCalculator.innerHTML = value+value2;
        return ;
    }

    console.log(value+value2);
}
function resetArray(valor) {
  
}
/*Pone el valor de todas las variables en 0 */
function clearAllValues() { 

    while(valor.length != 0){
        valor.pop();
    }
value=0;
value2=0;
actionValue=0;
plusRepiter=0;
minusRepiter=0;
multiRepiter=0;
divRepiter=0;
monitorPrintCalculator.innerHTML = 0;
}
function showResult() {
    monitorPrintCalculator.innerHTML = arre;
}