const fs = require('fs')
let enCartelera = {
    db: './data/movies.json',
    titulo: "En Carteletera",
    leerJson: function(){
        let moviesJson= fs.readFileSync(this.db, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies},

    cantidad: function(){
        return this.leerJson().total_movies
    },
    
    
}

module.exports = enCartelera