//el metodo consiste en agregar una funcion como propiedad
let datosPersonales = {
    nombre: 'Jesus',
    apellido: 'Correa',
    nacionalidad: 'colombia',
    edad: 10,

    //////////////////////////////////////
    //Si es colombiano y mayor de edad, será aprovado.
    verificacion: function(){
        if (datosPersonales.edad>18 && datosPersonales.nacionalidad=='colombia'){
            return 'Porque tu edad es '+this.edad+' años y eres de '+this.nacionalidad+' tú estás aprovado'
        }else if (datosPersonales.edad<18 && datosPersonales.nacionalidad=='colombia'){
            return 'Al ser de '+this.nacionalidad+' pero tener '+this.edad+' años debes traer autorización de tus padres'
        }else{
            return 'Al ser de ' +this.nacionalidad+' eres rechazado, pues el programa es solo para colombianos'
        }

    }
}

    
    console.log(datosPersonales.verificacion())
    /* console.log(datosPersonales) // Todos los objetos o datos */
    
    function Candidatos (nombre,apellido,nacionalidad,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.edad = edad
    }
    let nuevosCandidatos = new Candidatos('Juan','Lopez','colombia',34)
    

/* console.log(nuevosCandidatos) */
/* console.table(datosPersonales)
console.table(nuevosCandidatos) */

module.exports = datosPersonales.verificacion