const fs = require('fs')
let sucursales = {
    db: './data/theaters.json',
    titulo: "           *****        NUESTRAS SALAS         *****",
    leerJson: function(){
        let sucusJson= fs.readFileSync(this.db, 'utf-8');
        let sucursales = JSON.parse(sucusJson);
        return sucursales},

    cantidad: function(){
        return this.leerJson().total_theaters
    },
}

module.exports = sucursales
   