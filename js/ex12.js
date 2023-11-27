var personas = [
    { nombre: "Manel", edad: 21, ciudad: "Reus" },
    { nombre: "David", edad: 30, ciudad: "Torredembarra" },
    { nombre: "Dani", edad: 42, ciudad: "Torredembarra" }
];

function imprimirPropiedad(objetos, propiedad) {
    for (var i = 0; i < objetos.length; i++) {
        console.log(objetos[i][propiedad]);
    }
}
imprimirPropiedad(personas, "edad");
