/* Podríamos tener un objeto literal que represente a la concesionaria con los autos que 
creamos y que esta tenga las funcionalidades de buscar por patente y marcar como vendido 
un auto. */

/* requerir módulo autos */
let autosImportados = require("./Etapa 1")
let concesionaria = {
   autos: autosImportados,

   buscarAuto: function(patent){
      let autoBuscado = this.autos.find(patent => patent.patente == patent)
         if (autoBuscado == undefined){
            return null
         } else {
            return autoBuscado
         }
   }
}

/* concesionaria.buscarAuto("WER243") */
