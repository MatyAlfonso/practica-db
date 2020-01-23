let db = require('./database/models');

module.exports = {
    index: function (req, res) {
        db.movies.findAll()
            .then(data => {
                res.render('/movies', {
                    peliculas: data
                })
            })
            .catch(error => {
                res.send("Hubo un error, intentalo de nuevo");
            })
    },
    show: function (req, res) {
        db.movies.findByPk(req.params.id)
            .then(data => {
                if (data) {
                    res.render('/movies/detail', {
                        pelicula: data
                    })
                } else {
                    res.redirect('/movies')
                }

            })
            .catch(error => {
                res.send("Hubo un error, intentalo de nuevo");
            })
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