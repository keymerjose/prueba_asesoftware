const { DataTypes } = require('sequelize');
const { db } = require('../database/conexion');
const Servicios = require('./servicios');

const Turnos = db.define( 'Turnos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_servicio: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Servicios',
            key: 'id'
        }
    },
    fecha_turno: {
        type: DataTypes.DATE
    },
    hora_inicio: {
        type: DataTypes.TIME
    },
    hora_fin: {
        type: DataTypes.TIME
    },
    estado: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    schema: 'sys'
} );


module.exports = Turnos;