let db = require('./database/models');

module.exports = {
    index: function (req, res) {
        db.movies.findAll()
            .then(data => {
                res.render('movies/index', {
                    peliculas: data
                })
            })
            .catch(error => {
                res.send("Hubo un error, intentalo de nuevo");
            })
    },
    show: function (req, res) {
        //buscar una pelicula por el id
        //enviar el dato a la vista
    },
    recent: function (req, res) {
        // buscar todas las peliculas 
        // agregar un limite de 5 y un orden de fecha de creacion desc
    },
    recommended: function (req, res) {
        // buscar todas las peliculas
        // agregar una condicion de ratin >= 8
    },
    search: function (req, res) {
        // buscar todas las peliculas 
        // agregar una condicion de title contenga el dato que viene por el req
    }
}