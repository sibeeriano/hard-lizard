let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');

let index = {
    
    homePage:function(res){
        //titulo
        res.write(homePage.titulo)
        res.write(`\n\n`)
       //cantidad de pelis
        res.write("Cantidad de pelis en cartelera: "+ homePage.cantidad()+ `\n\n`)
        //lista de pelis
        res.write("             *****LISTADO DE PELICULAS*****" + `\n`)
        homePage.listarPelis().forEach(function(pelicula){
            res.write(pelicula)
            res.write(`\n\n`)
            })
        //pie de pagina
        res.write(`*******Recorda que podes visitar las secciones*********
                                            /En-Cartelera
                                            /Mas-Votadas
                                            /Sucursales
                                            /Contacto
                                            /Preguntas-Frecuentes`)
        res.end();
    },

    enCartelera:function(res){
        //titulo
        res.write(`                                                 ***************** ${enCartelera.titulo} ***************** \n\n` )
        //cantidad de pelis
        res.write(`Peliculas en cartel: ${homePage.cantidad()}`)
        res.write((`\n\n`))
        //pelis titulo + reseña
        let movies = enCartelera.leerJson();
        movies.movies.forEach(function(datos){
                res.write(`TITULO: ${datos.title}`)
                res.write((`\n\n`))
                res.write(`RESEÑA: ${datos.overview}`)
                res.write((`\n\n\n`))
            })  
        
        res.end();
        
    },

    masVotadas:function(res){
        //titulo
        res.write(masVotadas.titulo)
        res.write((`\n\n\n`))
        //pelis con puntaje mayo a 7
        res.write("             *****Las pelis con puntaje arriba de 7 son " + masVotadas.cantidad() + "!*****" );
        //promerdio puntaje
        res.write((`\n\n\n`))
        res.write("             *****El promedio total de las mejores pelis es de " + masVotadas.ratingPromedio() +"!*****")
        //nombre, puntaje y reseña
        res.write((`\n\n\n`))
        let movies = masVotadas.mejores();
        movies.forEach(function(datos){
                res.write(`TITULO: ${datos.title}`)
                res.write((`\n\n`))
                res.write(`PUNTAJE: ${datos.vote_average}`)
                res.write((`\n\n`))
                res.write(`RESEÑA: ${datos.overview}`)
                res.write((`\n\n\n`))
            })  
        res.end()




    },

    sucursales:function(){

    },

    contactos:function(){

    },

    preguntasFrecuentes:function(){

    }



}



module.exports = index