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
        type: dataTypes.INTEGER
    },
    awards: {
        type: dataTypes.INTEGER
    },
    release_date: {
        type: dataTypes.INTEGER
    },
    length: {
        type: dataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    genre_id: {
        type: dataTypes.INTEGER
    }
};

let config = {
    tableName: "movies",
    underscored: true,
    timestamps: true,
};

const Movie = sequelize.define('movies', cols, config);

module.exports = Movie;