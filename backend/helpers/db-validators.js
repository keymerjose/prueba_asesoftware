const Servicios = require("../models/servicios")


const validarIdServicio = async( id ) => {
    const data = await Servicios.findByPk( id );
    if( !data ){
        throw new Error(`El id_servicio no existe: ${ id }`);
    }
}

module.exports = {
    validarIdServicio
}