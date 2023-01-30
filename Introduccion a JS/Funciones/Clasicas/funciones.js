//Funcion Expresada
/*let Multiplicacion = function (primerNumero, segundoNumero){ 
    return primerNumero * segundoNumero

    
}
console.log (Multiplicacion(2,3))

//Funcion Declarada
function divison (casa, perro) {
    return casa / perro
 }
 console.log (divison(8, 2))*/

 //el scope es el alcance de una funcion
/* let mafe = 'mi amorcito'

function quien (){
    return mafe

console.log (quien)
}
 */

//function Expresada
/* let sumar = function(num1,num2){
    return num1 + num2;
}
console.log(sumar(380,3))

//Function Declarada
function multiplicar(numA, numB){
    return numA*numB;
}
console.log(multiplicar(5,3)) */

/* //Scope
let mensaje = 'hola';

function saludar(){
    let mensaje = 'Chao'
    return mensaje;
}

console.log(mensaje); //Ejecuta variable global
console.log(saludar()); //Ejecuta variable local de la funcion */

/* function cuadruple(numero) {
    return 4* numero;
 }
 
 cuadruple()
 console.log(cuadruple(5)) */

/*  function sumar (num1,num2){
    return num1 +   num2
}

function tripleDeLaSuma(n1,n2){
    let resultadoSuma = sumar(n1,n2)
    return resultadoSuma *3
}
console.log(tripleDeLaSuma(2,3)) */

/* let pi = 3.14
function perimetro (numeroRadio){
    return pi * numeroRadio * 2
}
function area (numeroRadio){
    return pi*numeroRadio*numeroRadio
}
console.log(area(7)) */

/* function longitudNombreCompleto (string1, string2){
    return string1.length + " ".length + string2.length
}

console.log(longitudNombreCompleto("jesus", "correa")); */

/* function escribirCartelito (stringTitulo, stringNombre, stringApellido) {
    return stringTitulo + " "+ stringNombre +" " + stringApellido ;
}
console.log (escribirCartelito("Dr.","Alberto","Buenavida")); */

/* function sePoneLaOlla (stringDia){
    if (stringDia == "domingo"){
       return "¡Pongamos la olla, hoy se comen pastas!";
    }else (stringDia != "domingo")
        return "Mejor lo dejamos para el domingo";
}
console.log(sePoneLaOlla("domingo")); */


/* 
let dia = 'jueves'

function finDeSemana (dia) {	
	switch (dia){
		case 'lunes':
			console.log("buena semana");
			break
		case 'viernes':
			console.log("buen finde");
			break
		default:
			console.log("buenos dias");
	}
} */

/* finDeSemana('viernes'); */

let Saludo = nombre => console.log('Hola ' + nombre + ' Bienvenido');
Saludo('Jesus')
