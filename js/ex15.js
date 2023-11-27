class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
        this.nombre = nombre;
        this.tiempoPreparacion = tiempoPreparacion;
        this.ingredientes = ingredientes;
    }
}

var pizzaMargarita = new Receta("Pizza Margarita", "30 minutos", ["masa de pizza", "salsa de tomate", "mozzarella", "tomates frescos", "albahaca", "aceite de oliva"]);
var espaguetisBolognesa = new Receta("Espaguetis Bolognesa", "45 minutos", ["espaguetis", "salsa boloñesa", "queso parmesano", "albahaca"]);
var ensaladaCesar = new Receta("Ensalada César", "15 minutos", ["lechuga romana", "pollo a la parrilla", "crutones", "queso parmesano", "aderezo César"]);
var recetas = [pizzaMargarita, espaguetisBolognesa, ensaladaCesar];

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
