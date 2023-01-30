let autosIimportados = require ("./Etapa 1");
const consesionaria = {
   /*  autoss: autosIimportados, */
    buscarrAutos : function(placa){
        let autoBusscado = this.autoss.find(patens => this.autoss.patente === placa);
            if (autoBusscado === undefined){
                return null
            }
            else{
                return autoBusscado
            }

    }
}