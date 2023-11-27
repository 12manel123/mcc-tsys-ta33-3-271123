var miArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function longitudDelArray(arr) {
    console.log("La longitud del array es: " + arr.length);
}

function elementoAleatorio(arr) {
    var indiceAleatorio = Math.floor(Math.random() * arr.length);
    var elemento = arr[indiceAleatorio];
    console.log("Elemento aleatorio del array: " + elemento);
}

longitudDelArray(miArray);
elementoAleatorio(miArray);