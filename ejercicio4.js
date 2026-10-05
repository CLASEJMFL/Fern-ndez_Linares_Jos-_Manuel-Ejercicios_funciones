// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

function mayus(arrString){
    return arrStringMayus = arrString.map(arrString => arrString.toUpperCase());
}

let arrString = ["asdad","kjasndsand","nioasdnioñasdfnmkisda"];

console.log(mayus(arrString));