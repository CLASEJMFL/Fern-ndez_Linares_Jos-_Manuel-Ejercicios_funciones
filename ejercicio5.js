// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

function oleSuPrimo(num){
    for (let i = 2;i < num;i++){
        if (num%i == 0 && i != num){
            return "EL numero no es primo";
            break;
        } 
    }
    return "El numero es primo";
}
console.log(oleSuPrimo(5));