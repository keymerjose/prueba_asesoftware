const { DataTypes } = require('sequelize');
const { db } = require('../database/conexion');

const Comercios = db.define('Comercios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_comercios: {
        type: DataTypes.STRING
    },
    aforo_maximo: {
        type: DataTypes.INTEGER
    }
}, {
    schema: 'sys'
});

module.exports = Comercios;