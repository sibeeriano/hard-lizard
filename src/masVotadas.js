const fs = require('fs')
let masVotadas = {
    db: './data/movies.json', //no uso require porque no es un archivo .js
    titulo: '                      ******** MAS VOTADAS *********\n',
    leerJson: function(){
                    let moviesJson= fs.readFileSync(this.db, 'utf-8');
                    let movies = JSON.parse(moviesJson);
                    return movies},

    cantidad: function(){
        let movies =this.leerJson();
        let mejores = movies.movies.filter(function(peliporpuntos){
            return  peliporpuntos.vote_average >= 7 
        })
        return mejores.length
    },

    mejores: function(){
            let movies =this.leerJson();
            let mejores = movies.movies.filter(function(peliporpuntos){
                return  peliporpuntos.vote_average >= 7 
            })
            mejores.sort()
            return mejores
    },

    ratingPromedio: function(){
        let movies = this.mejores(); 
        let sumaRating=0;
        movies.forEach(function(movie){
            sumaRating += movie.vote_average
        })
        return Math.round(sumaRating / movies.length)
        } 




}


module.exports = masVotadas