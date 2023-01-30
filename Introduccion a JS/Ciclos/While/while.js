// Estructura
    //Requiere de una variable como condicional inicial
/* let vuelta = 1
    //while como condicion
while(vuelta<=5){ //Esta condicion debe ser verdadera para continuar repitiendo el codigo
        //Codigo a evaluar
    console.log('Dando la vuelta numero '+vuelta);
        //Condicino modificadora
    vuelta++ //Si no existe, será loop infinito
};
 */

//Do while es silimar, pero la condicion a evaluar va al final
/* let vueltas = 0
do{
    console.log('Dando la vuelta numero '+vueltas);
    vueltas++
}while(vueltas<=5);
 */
function tablaDeMultiplicar(numero) {
    let i = 0
   
   while(i<=10){
       console.log(numero*i)
       i++
   }
}
console.log(tablaDeMultiplicar(2))