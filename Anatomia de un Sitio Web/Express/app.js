const express = require('express');
const app = express()

app.listen(2500,()=>{console.log("Felicitaciones, fue exitoso")})

app.get('/', (req, res) => {
    res.send("Hola, mundo");
})
app.get('/Perfil', function(req,res){
    res.send("Este es el perfil");
})