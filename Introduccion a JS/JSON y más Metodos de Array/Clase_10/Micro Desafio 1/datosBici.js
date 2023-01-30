let fs = require("fs");

let rutaArchivo = "./bicicletas.json";

let datos = fs.readFileSync(rutaArchivo, "utf-8");

let bicisArray = JSON.parse(datos);

console.log(bicisArray)

module.exports = bicisArray;