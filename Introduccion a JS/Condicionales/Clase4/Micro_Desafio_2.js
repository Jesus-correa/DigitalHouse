//Ajuste tarifario de energia electrica

let pagoMes = 1800
let pagoSinSubsidio = (pagoMes*20)/100
let consumoKWH = 110

let factura = (consumoKWH >= 300) ? 'Debido a que su hogar tuvo un consumo de 310kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $'+(pagoSinSubsidio*consumoKWH) : 'El total a pagar será de $' + (pagoMes*consumoKWH)
console.log(factura)