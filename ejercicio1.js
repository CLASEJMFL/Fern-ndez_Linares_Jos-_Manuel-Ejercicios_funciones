// 1. Crea una función que reciba dos números y devuelva su suma

function suma(num1,num2){
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("ERROR 0 - Uno de los 2 numeros no es un numero");
        return 0;
    }
    return num1+num2;
}

console.log(suma(4,5));