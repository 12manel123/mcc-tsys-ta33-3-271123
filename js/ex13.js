var recetaCocina = {
    nombre: "Pizza Margarita",
    tiempoPreparacion: "30 minutos",
    ingredientes: ["masa de pizza", "salsa de tomate", "mozzarella", "tomates frescos", "albahaca", "aceite de oliva"]
};

function imprimirReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:");

    for (var i = 0; i < receta.ingredientes.length; i++) {
        console.log("- " + receta.ingredientes[i]);
    }
}

imprimirReceta(recetaCocina);
