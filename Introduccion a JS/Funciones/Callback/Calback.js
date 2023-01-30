/* let sumar = (num1, num2) => num1+num2
let restar = (num1, num2) => num1-num2
let multiplicar = (num1,num2) => num1*num2
let dividir = (num1,num2) => num1/num2


let calcular = (num1,num2,operacion) => operacion(num1,num2);


console.log(calcular(45,5,restar)); */

let sumar = (number1, number2) => number1+number2
let restar = (number1, number2) => number1-number2
let multiplicar = (number1, number2) => number1*number2
let dividir = (number1, number2) => number1/number2

let calculadora = (number1, number2, operacion) => operacion(number1, number2)
console.log(calculadora(5,6,sumar))