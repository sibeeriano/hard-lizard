const index = require('./src/index')


let router = function(url,res) {

switch(url){

case '/':
    index.homePage()
break

case '/en-cartelera':
    index.enCartelera()
break

case '/mas-votadas':
    index.masVotados()
break

case '/sucursales':
    index.sucursales()
break

case 'contacto':
    index.contactos()
break

case '/preguntas-frecuentes':
    index.preguntasFrecuentes()
break

default: 

};
}

module.exports = router