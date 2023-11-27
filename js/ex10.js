var persona = {
    nombre: "Manel",
    apellidos: "Castellví Cerezuela",
    edad: 30,
    direccion: "C/Antony Roig",
    ciudad: "Torredembarra",
    pais: "España"
};

function mostrarNombreCompleto(persona) {
    var nombreCompleto = persona.nombre + " " + persona.apellidos;
    console.log("Nombre completo: " + nombreCompleto);
}

mostrarNombreCompleto(persona);
