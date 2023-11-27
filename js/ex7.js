function mostrarNumerosMayoresQueCinco(numeros) {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > 5) {
            console.log(numeros[i]);
        }
    }
}
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mostrarNumerosMayoresQueCinco(arrayNumeros);
