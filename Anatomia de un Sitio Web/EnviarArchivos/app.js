/* const express = require('express');
const app = express();

app.listen(700,()=> {
    console.log("Está vivo")
})

app.get("/", (req, res)=>{
    res.sendFile(" ~ /desktop/fronted-c7/clase-5/index.html")
})  *///En estos momentos no funciona porque no es una ruta adsoluta. Por lo tnto, en el navegador resulta un error

const express = require('express');
const app = express();
const path = require('path'); //Modulo nativo para gnerar rutas

app.listen(700,()=> {
    console.log("Está vivo")
})

app.get("/", (req, res)=>{
    let filePath = path.resolve(__dirname,"/MaterialDigitalHouse/DigitalHouse/AnatomiaDeUnSitioWeb/EnviarArchivos/HTML/index.html")
    //Copié un archivo HTML de Mafe en esta direccion para evitar hacer un HTML yo
    res.sendFile(filePath) 
}) 

