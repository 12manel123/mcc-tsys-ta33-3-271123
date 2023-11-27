function dividirNumerosParesEImpares(numeros) {
    var pares = [];
    var impares = [];

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    return {
        pares: pares,
        impares: impares
    };
}

var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultadoDivision = dividirNumerosParesEImpares(arrayNumeros);
var concatenado = resultadoDivision.pares.concat(resultadoDivision.impares);

console.log("Array de números:", arrayNumeros);
console.log("Array de pares:", resultadoDivision.pares);
console.log("Array de impares:", resultadoDivision.impares);
console.log("Arrays concatenados:", concatenado);
