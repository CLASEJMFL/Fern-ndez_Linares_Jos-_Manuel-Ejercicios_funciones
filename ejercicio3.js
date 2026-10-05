// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function vocales(cadena){
    let contador = 0
    for (let i = 0;i<cadena.length;i++){
        if ("aeiouAEIOU".includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}

let cadena = "DONDE ESTA MI MAMA DONDE ESTA MI PAPA, HOLA GRACIAS Y TU";

console.log(vocales(cadena));