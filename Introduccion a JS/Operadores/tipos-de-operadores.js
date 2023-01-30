//SUMA//
let niñosABordo = (5+8)
console.log (niñosABordo)

//RESTA// //Tambien se puede hacer por consola//
console.log (8-6)

//Multiplicacion y division//
let multi = (4*3)
let division = (8/4)
console.log(multi)
console.log(division)

//Modulo// //Devuelve el resto de la division//
let modulo = (8%4)
console.log(modulo)

//Incremento y Decremento//
let numero = 9 
let otronumero = 20
console.log (++numero)
console.log (-- otronumero)

//combinacion//
console.log (niñosABordo*2)
console.log (multi/division)
console.log (otronumero%numero)

//Operador Comparativo//
var precioManzanas = 3.5
var precioPerass = '8.6'
var precioUvas = 3.5
var precioNaranjas = 8.6
var precioFresa = 4.5
var precioKwii = 4.6
var precioMora = '4.5'
var precioLulo = '3.5'
var precioMango = 1.8
var precioMelon = '3.5'

//Comparacion Simple//
//True//
console.log (precioManzanas == precioLulo)
//False//
console.log (precioManzanas == precioPerass)

//Comparacion Estricta//
//True//
console.log (precioManzanas === precioUvas)
console.log (precioLulo === precioMelon)
//False//
console.log(precioFresa === precioMora)
console.log(precioFresa === precioKwii)


//Desigualdad Simple//
//True//
console.log(precioLulo != precioMango)
console.log(precioFresa != precioKwii)
//False//
console.log(precioManzanas != precioUvas)
console.log(precioManzanas !=precioLulo)

//Desigualdad Estricta//
//True// 
console.log(precioManzanas !==precioFresa)
console.log(precioFresa!==precioLulo)
//False//
console.log(precioManzanas !== precioUvas)
console.log(precioLulo!==precioMelon)

//Mayor o Menor Que//
//True//
console.log(precioManzanas>precioMango)
//Flase//
console.log(precioManzanas>precioLulo)
console.log(precioMango>precioFresa)
//True//
console.log(precioManzanas<precioPerass)
//False//
console.log(precioFresa<precioMango)

//Mayor, Menor o igual que//
//True//
console.log(precioManzanas>=precioUvas)
console.log(precioManzanas>=precioMango)
console.log(precioLulo<=precioManzanas)
console.log(precioMango<=precioMora)
//False//
console.log(precioManzanas<=precioMango)
console.log(precioMelon>=precioPerass)

//operadores logicos//
let diaSabado = true
let diaDomingo = false
let jornadaDiurna = false
let jornadaNocturna = true

//AND//
//True//
console.log (diaSabado && jornadaNocturna)
//False//
console.log (diaDomingo && jornadaDiurna)
console.log (diaSabado && jornadaDiurna)

//OR//
//True//
console.log (diaSabado || jornadaNocturna)
console.log (diaSabado || jornadaDiurna)
console.log (diaSabado || jornadaNocturna)
//false//
console.log (diaDomingo || jornadaDiurna)

//Negacion//
console.log (!diaSabado)

//concatenacion//
let nombre = 'Jesus'
let apellido = 'Correa'

//sin espacio//
console.log (nombre + apellido)

//con espacio//
console.log (nombre+' '+apellido)