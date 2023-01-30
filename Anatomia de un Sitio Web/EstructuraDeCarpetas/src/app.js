const express = require('express')
const app = express()
const path = require('path')

//Recursos publicos 
app.use(express.static(path.resolve(__dirname, '../public')))

//Aplicar HMTL
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})
//Para ser escuchado
app.listen(3030,()=> console.log("Servidor en el 3030"))
