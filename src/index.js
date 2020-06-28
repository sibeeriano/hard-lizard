let homePage = require('./homePage');
let enCartelera = require('./enCartelera');
let masVotadas = require('./masVotadas');
let sucursales = require('./sucursales')
let contacto = require('./contacto')
let faqs = require('./preguntasFrecuentes')

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

    sucursales:function(res){
        //TITULO
        res.write(sucursales.titulo)
        res.write(`\n\n`)
        res.write("PUEDES ELEGIR ENTRE CUALQUIERA DENUESTRAS " + sucursales.cantidad() + " SALAS!")        
        res.write(`\n\n`)
        //LISTADOS DE SALAS
        let sucus = sucursales.leerJson();
        sucus.theaters.forEach(function(datos){
                res.write(`NOMBRE: ${datos.name}`)
                res.write((`\n\n`))
                res.write(`DIRECCION: ${datos.address}`)
                res.write((`\n\n\n`))
                res.write(`INFO DEL LUGAR: ${datos.description}`)
                res.write((`\n\n\n`))
            })  
        res.end();

    },

    contactos:function(res){
        //titulo
        res.write(`\n`)
        res.write(contacto.titulo)
        res.write(`\n`)
        res.write(`\n`)
        //contenido
        res.write(contacto.contenido)
        res.end()
        

    },

    preguntasFrecuentes:function(res){
        //TITULO
        res.write(faqs.titulo)
        res.write(`\n\n`)
        res.write("Dato de color: tenemos en total " + faqs.cantidad() + " preguntas!")        
        res.write(`\n\n`)
        //LISTADOS DE SALAS
        let preguntas = faqs.leerJson();
        preguntas.faqs.forEach(function(datos){
                res.write(`PREGUNTA: ${datos.faq_title}`)
                res.write((`\n\n`))
                res.write(`RESPUESTA: ${datos.faq_answer}`)
                res.write((`\n\n\n`))
                })  
        res.end();

    }



}



module.exports = index