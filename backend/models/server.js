const express = require('express');
const cors = require('cors');
const { db } = require('../database/conexion');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            comercios: '/api/comercios',
            servicios: '/api/servicios',
            turnos: '/api/turnos'
        }

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    async conectarDB() {
        try {
            db.authenticate();
            console.log('BD conectada');
        } catch (error) {
            console.log('error al conectar a la BD');
            throw new Error( error );
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );
    }

    routes(){
        this.app.use( this.paths.comercios, require('../routes/comercios') );
        this.app.use( this.paths.servicios, require('../routes/servicios') );
        this.app.use( this.paths.turnos, require('../routes/turnos') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        } )
    }
}

module.exports = Server;