let notas = [1,8,3,4,10,9, 6, 5,4,2];

/////Metodo Map\\\\\\
let notasHastaE100 = notas.map(function(numero){
    return numero * 10;
    }); 

    /* console.log(notasHastaE100) */
let notasAumentadas = notas.map(function(numero){
    return numero*1.04
})
    /* console.log(notasAumentadas); */

/////Metodo Filter\\\\
let notasAprovadas = notas.filter(function(numero){
    //Condicional
    return numero>=6
});
/* console.log(notasAprovadas) */

/////// Metodo Reduce \\\\\\\
let sumaNotas = notas.reduce(function(acomulador, number){
    return acomulador+number
});
console.log(sumaNotas) 

///////Metodo forEach\\\\\\\
notas.forEach(function(valor,indice){
    /* console.log('En pocision '+indice+' tengo el valor '+valor) */
})
