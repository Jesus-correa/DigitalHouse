//Saldo Bancario
let operacionesBancarias = [2,3,4,1,5,-4,-8,9,-10,5];

function calcularMovimiento (movimientos){
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoFinal = 0;
    //Codigos para modificar acomuladores
    for (let i=0; movimientos.length; i++){
        if (movimientos[i]>0){
        saldoDepositos += movimientos[i]
        }else{
            saldoRetiros += movimientos[i]
        }
    saldoFinal += movimientos[i]
    }
    return[saldoDepositos, saldoRetiros, saldoFinal]

}


function mostrarACliente (nombre, apellido, movimientos){
    let arrayDatos = calcularMovimiento(movimientos);
    
    console.log('Estiado: '+nombre+' '+apellido)

    console.log('El monto total de los depósitos es de: $' + arrayDatos[0])
    console.log('El monto total de los retiros es de: $' +arrayDatos[1])
    console.log('Por lo tanto, su saldo actual en la cuenta es de: $'+arrayDatos[2])
}

mostrarACliente('Jesus', 'Correa', operacionesBancarias)