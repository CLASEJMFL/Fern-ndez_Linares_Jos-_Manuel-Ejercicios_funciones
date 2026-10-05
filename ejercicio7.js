// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
function compruebaArray(arr1) {
    if (!Array.isArray(arr1)) {
        console.log("ERROR 0 - Lo que me has enviado no es un array");
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] !== "number") {
            console.log("ERROR 1 - Los datos del array no son todos números");
            return false;
        }
    }
    return true;
}
function pares(arr1) {
    if (!compruebaArray(arr1)) {
        return;
    }
    let suma = 0;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] % 2 === 0) {
            suma = suma + arr1[i];
        }
    }
    console.log("la suma de los numeros es: ",suma);
}
const arr1 = [1, 2, 43, "hola", 1, 4, 245, 2345, 2];
pares(arr1);