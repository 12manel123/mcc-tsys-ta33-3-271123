var recetas = [
    {
        nombre: "Pizza Margarita",
        tiempoPreparacion: "30 minutos",
        ingredientes: ["masa de pizza", "salsa de tomate", "mozzarella", "tomates frescos", "albahaca", "aceite de oliva"]
    },
    {
        nombre: "Espaguetis Bolognesa",
        tiempoPreparacion: "45 minutos",
        ingredientes: ["espaguetis", "salsa boloñesa", "queso parmesano", "albahaca"]
    },
    {
        nombre: "Ensalada César",
        tiempoPreparacion: "15 minutos",
        ingredientes: ["lechuga romana", "pollo a la parrilla", "crutones", "queso parmesano", "aderezo César"]
    }
];

function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:");

    for (var i = 0; i < receta.ingredientes.length; i++) {
        console.log("- " + receta.ingredientes[i]);
    }

    console.log("\n");
}

for (var i = 0; i < recetas.length; i++) {
    imprimirReceta(recetas[i]);
}
