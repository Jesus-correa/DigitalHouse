//Crear funcion para calcular precio de alquiler
// 'Tipo de Vehiculo'
// 'dias de alquiler'

function alquiler (tipoVehiculo, diasAlquiler, Silla){
    let TotalAPagar = 0;

    switch (alquiler){
        case 'compacto':
        case 'Compacto':
            TotalAPagar += 14000 * diasAlquiler;
            break;
        case 'mediano':
        case 'Mediano':
            TotalAPagar += 17000 * diasAlquiler;
            break
        case 'Camioneta':
        case 'camioneta':
            TotalAPagar += 28000 * diasAlquiler;
        
    }
    if (Silla == true){
        TotalAPagar +=  12000*diasAlquiler
    }
return 'Estimado cliente: en base al tipo de vehículo ' + tipoVehiculo + ' alquilado, considerando los 3 días utilizados, el monto total a pagar es de $' + TotalAPagar;
}

console.log(alquiler('Compacto', 3, false));

