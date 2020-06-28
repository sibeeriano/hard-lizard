let homePage = require('./homePage');
let enCartelera = require('./enCartelera')

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
        res.write(enCartelera.titulo)
        
    },

    masVotados:function(){

    },

    sucursales:function(){

    },

    contactos:function(){

    },

    preguntasFrecuentes:function(){

    }



}



module.exports = index