let fs = require("fs")
// Extraer de JSON.json//
let rutaArchivo = "./JSON";

let patosJSON = fs.readfileSync(rutaArchivo,"utf-8");

let patosArray = JSON.parse(patosJSON);
console.log(patosArray)