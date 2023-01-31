const autos = require("./auto")
let autosImportados = require("./auto")
const concesionaria = {
  
   autos: autosImportados,
   
 
   buscarAuto:function(paten){
      let autoBuscando = this.autos.find(auto => auto.patente == paten)
         if (autoBuscando){
            return autoBuscando
         } 
         else{ 
            return autoBuscando=null
         }
   },
//Etapa 4
   venderAuto: function(paten){
      if (this.buscarAuto(paten) != null){
         let autoParaVender = this.buscarAuto(paten);
         return autoParaVender.vendido = true
      }
   },
// Etapa 5

   autosParaLaVenta: function(){
      let autosEnVenta = this.autos.filter (function(auto){ return auto.vendido == false;
      })
      return autosEnVenta;

   },
   // Etapa 6 
   // autosNuevos debe arrojar autos <=100 
   // autosParaLaVenta contiene los autos no vendidos
   autosNuevos: function(){
    let autosDisponibles = this.autosParaLaVenta.filter(auto.vendido == false)
      let autos0KM = this.autosDisponibles(function(auto){
         return this.autosDisponibles.km <= 100
      })
   }

}

console.log(autos0KM())