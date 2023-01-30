let fs = require("fs");
let ruta1 = "./datos/firuras1.json"
let ruta2 = "./datos/figuras2.json"
let ruta3 = "./datos/figuras3.json"

let figura1 = fs.readFileSync(ruta1,"utf-8");
let firuras2 = fs.readFileSync(ruta2,"utf-8");
let figuras3 = fs.readFileSync(ruta3,"utf-8");

console.table(figura1)
