let fs = require("fs");
let bicis = "/Micro Desafio 1/datosBici"

let datosBici = fs.readFileSync(bicis, "utf-8");
console.log(datosBici)