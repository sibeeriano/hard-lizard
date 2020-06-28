const fs = require('fs')
let homePage = {
    db: './data/movies.json', //no uso require porque no es un archivo .js
    titulo: ' Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n',
    leerJson: function(){
                    let moviesJson= fs.readFileSync(this.db, 'utf-8');
                    let movies = JSON.parse(moviesJson);
                    return movies},
    
    cantidad: function(){
                    return this.leerJson().total_movies
    },

    listarPelis: function(){
                    let movies = this.leerJson();
                    let titulos = [];
                    movies.movies.forEach(function(pelicula){
                        titulos.push(pelicula.title)
                    });
                    titulos.sort()
                    return titulos
        }
    }

    module.exports = homePage