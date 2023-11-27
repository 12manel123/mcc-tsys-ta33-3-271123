function intercalarArrays(arrayUno, arrayDos) {
    var nuevoArray = [];

    if (arrayUno.length !== arrayDos.length) {
        console.error("Los arrays deben tener la misma longitud");
        return;
    }

    for (var i = 0; i < arrayUno.length; i++) {
        nuevoArray.push(arrayUno[i]);
        nuevoArray.push(arrayDos[i]);
    }

    arrayUno.length = 0;
    arrayDos.length = 0;

    return nuevoArray;
}

// Ejemplo de uso
var arrayUno = [1, 2, 3];
var arrayDos = [4, 5, 6];
var resultado = intercalarArrays(arrayUno, arrayDos);

console.log("Resultado intercalado:", resultado);
console.log("Array Uno después de la operación:", arrayUno);
console.log("Array Dos después de la operación:", arrayDos);
