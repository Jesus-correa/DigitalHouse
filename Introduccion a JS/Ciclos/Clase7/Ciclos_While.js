i = 1;

while(i<=10){
 /*    console.log("2 * " + i + " = " + (2*i)) */
    i++;
}

function tablasDelUnoAlDiez(){
    for (let i = 1; i<=10; i++){
    tablaDeMultiplicar(i)
    }
}
function tablaDeMultiplicar(numero) {
    let i = 0
         
    while(i<=10){
        console.log(numero + " * " + i + " = " + (numero*i))
        i++
         }
    }
    
    tablasDelUnoAlDiez()

