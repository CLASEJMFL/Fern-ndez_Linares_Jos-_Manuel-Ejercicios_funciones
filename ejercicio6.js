// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function compruebaArray(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
    } else {
        console.log("ERROR 0 - Uno de los 2 arrays no es un array");
        return 0;
    }
    const tieneNumeros1 = arr1.some(elemento => typeof elemento != 'number');
    const tieneNumeros2 = arr2.some(elemento => typeof elemento != 'number');
    if (tieneNumeros1 || tieneNumeros2) {
        console.log("ERROR 1 - Uno de los 2 arrays no contiene solo numeros");
        return 1;
    }
    return 2;
}

function comunes(arr1, arr2) {
    if (compruebaArray(arr1, arr2) == 0 || compruebaArray(arr1, arr2) == 1) {
        return;
    }

    let arr3 = [];
    let mayor;

    if (arr1.length > arr2.length) {
        mayor = "arr1";
    } else {
        mayor = "arr2";
    }

    if (mayor == "arr1") {
        for (let i = 0; i < arr2.length; i++) {
            for (let x = 0; x < arr1.length; x++) {
                if (arr1[x] == arr2[i]) {
                    arr3.push(arr2[i]);
                    break;
                }
            }
        }
    } else {
        for (let i = 0; i < arr1.length; i++) {
            for (let x = 0; x < arr2.length; x++) {
                if (arr2[x] == arr1[i]) {
                    arr3.push(arr1[i]);
                    break;
                }
            }
        }
    }
    return arr3;
}

// Los numeros comunes son 4,9,12,15
const arr1 = ["hola", 4, 7, 9, 12, 15];
const arr2 = [12,2, 4, 6, 9, 11, 15];

console.log(comunes(arr1,arr2));