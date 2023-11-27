function encontrarElementosRepetidos(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                console.log("Elemento repetido encontrado:", array1[i]);
                return;
            }
        }
    }

    console.log("No se encontraron elementos repetidos.");
}

var javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
var javascript2 = ["Objetos", "Arrays", "ParseInt"];

encontrarElementosRepetidos(javascript1, javascript2);
