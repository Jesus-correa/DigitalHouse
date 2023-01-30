/* 'Nuevo sueldo' */

let nombre = 'Luis';
let apellido = 'Torres';
let sueldoActual = 150;
let porcentajeAumento = 20;

let calculoAumento = ((sueldoActual*porcentajeAumento)/100);
console.log('El aumento es de: '+ calculoAumento);

let nuevoSueldo = calculoAumento + sueldoActual;
console.log('el nuevo sueldo es: '+nuevoSueldo);
