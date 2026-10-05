// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

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

function elevaCuadrado(arr1) {
    if (!compruebaArray(arr1)) {
        return;
    }
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i] ** 2);
    }
    console.log("El array elevado es: ", arr2);
}
let arr1 = [];
for (let i = 0; i < 5; i++) {

    arr1.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr1);
elevaCuadrado(arr1);