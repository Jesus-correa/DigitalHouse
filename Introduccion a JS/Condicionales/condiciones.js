//Se cumple la condicion
let dia = 'lunes'
let salud = 'sano'

/*if (dia == 'lunes' && salud == 'sano') {
    console.log ('trabajar')
}

//No se cumple la condicion
/* if (dia == 'lunes' && salud == 'enfermo') {
    console.log ('trabajar') 
 }*/

 //else//la accion si no se cumple la condicion
 if (dia == 'lunes' && salud == 'enfermo') {
    console.log ('trabajar')
 }else(console.log('ir al medico'))

 //else if// //En resumen, son dos condicionales en una//
if (dia == 'lunes' && salud == 'enfermo') {
    console.log ('ir al medico')
 }else if(dia == 'lunes' && salud == 'sano') {
    console.log('salir a pasear')
 }

 //Puedo combinar else y else if
 /*if (dia == 'lunes' && salud == 'enfermo') {
   console.log ('ir al medico')
}else if(dia == 'sabado' && salud == 'sano') {
   console.log('salir a pasear')
}else {
   console.log('reevaluar situacion')
}

//If ternario// 
//True
let respuesta = salud == 'sano'? 'Excelente':'odio estar enfermo' ;
console.log(respuesta)

//false
let respuesta2 = salud == 'enfermo'? 'Excelente':'odio estar enfermo' ;
console.log(respuesta)

//switch*/
/* switch(dia){
   case 'sabado':
      console.log('tengo compromiso')
      break
      case'domigo':
      console.log('Estoy en misa')
      break
      case'lunes':
      console.log('estoy libre')
      break

} */
//Switch con default
/* switch(salud){
   case 'flojera':
      console.log('no seas vago')
      break
   case 'hambre':
      console.log('busca comida')
      break
   default:
      console.log('Perfecto')
   
}
 */