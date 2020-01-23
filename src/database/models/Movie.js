const Sequelize = require('sequelize');
const sequelize = require('../database');

let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: dataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: dataTypes.INTEGER,
        allowNull: true,
        defaultValue = 0
    },
    awards: {
        type: dataTypes.INTEGER,
        allowNull: true,
        defaultValue = 0
    },
    release_date: {
        type: dataTypes.INTEGER,
        allowNull: true,
        defaultValue: "Próximamente"
    },
    length: {
        type: dataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    genre_id: {
        type: dataTypes.INTEGER,
        allowNull: false
    }
};

let config = {
    tableName: "movies",
    underscored: true,
    timestamps: true,
};

const Movie = sequelize.define('movies', cols, config);

module.exports = Movie;