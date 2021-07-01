const { DataTypes } = require('sequelize');
const { db } = require('../database/conexion');
const Comercios = require('./comercios');

const Servicios = db.define( 'Servicios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_comercio: {
        type: DataTypes.INTEGER,
    },
    nom_servicio: {
        type: DataTypes.STRING
    },
    hora_apertura: {
        type: DataTypes.TIME
    },
    hora_cierre: {
        type: DataTypes.TIME
    },
    duracion: {
        type: DataTypes.INTEGER
    }
}, {
    schema: 'sys'
} );



module.exports = Servicios;