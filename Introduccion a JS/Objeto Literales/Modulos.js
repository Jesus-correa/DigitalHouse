//Modullos Propios

//En la ultima linea module.exports (Mirar ultima lindea de Metodos Objetos,js)
//Luego importamos (variable+)
/* const resultadoAnterior = require("./Metodos Objetos");
console.log(resultadoAnterior) */

//Modulos Nativas
const fs = require("fs");
let texto = fs.readFileSync(".texto.txt","utf-8");

