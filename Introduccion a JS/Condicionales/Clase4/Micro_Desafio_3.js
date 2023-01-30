//Traductor a ingles

let palabra = 'amor'

switch (palabra){
    case 'perro':
    case 'Perro':
    case 'PERRO':
        console.log('dog');
        break;
    case 'gato':
    case 'GATO':
    case 'Gato':
        console.log('cat');
        break;
    case 'puerta':
    case 'Puerta':
    case 'PUERTA':
        console.log('door');
        break;
    case 'ventana':
    case 'Ventana':
    case 'VENTANA':
        console.log('window');
        break;
    case 'mesa':
    case 'Mesa':
    case 'MESA':
        console.log('table');
        break;
    default:
        console.log('La palabra ingresada es incorrecta');
}
