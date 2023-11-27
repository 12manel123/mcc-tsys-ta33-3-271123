var javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
javascript1.splice(javascript1.indexOf("DOM"), 1, "Objetos");
javascript1.splice(javascript1.indexOf("Arrays"), 1, "ArraysDifíciles");
var copiaUltimosDos = javascript1.slice(-2);
var indiceFunciones = javascript1.indexOf("Funciones");

console.log("Array después de las operaciones:", javascript1);
console.log("Copia de los últimos dos elementos:", copiaUltimosDos);
console.log("Índice del elemento 'Funciones':", indiceFunciones);
