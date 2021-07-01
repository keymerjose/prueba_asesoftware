const { response } = require("express");
const Servicios = require("../models/servicios");
const Turnos = require("../models/turnos");

const obtenerTurnos = async(req, res = response) => {
    const { id } = req.params;
    const data = await Turnos.findAll({
        where: {
            id_servicio: id
        }
    });

    return res.status(200).json((data) ? data : []);
}

const crearTurno = async(req, res = response) => {
    const { id_servicio, fecha_inicio, fecha_final } = req.body;

    // Buscar los datos del servicio
    const servicio = await Servicios.findByPk( id_servicio );
    
    
    // Diferencia en dias entre 2 fechas
    let fecha1 = new Date( fecha_inicio ).getTime();
    let fecha2 = new Date( fecha_final ).getTime();
    let dif = fecha2 - fecha1;
    let diff = dif/(1000*60*60*24);
    let msg = [];
    
    // Recorrer las fecha en busca de turnos e insertarlos
    for(let a = 0; a <= diff; a++){
        const objFecha = new Date(fecha_inicio);
        let b_fecha = objFecha.setDate( objFecha.getDate() + a );
        let nueva_fecha = new Date(b_fecha).toISOString().split('T')[0];

        const turno = await Turnos.findOne({
            where:{
                id_servicio,
                fecha_turno: nueva_fecha
            },
            order: [
                ['id', 'DESC']
            ]
        });

        if( turno ){
            // Calcular la nueva hora inicio del siguiente turno
            let horaObj = new Date( `${ turno.fecha_turno }T${ turno.hora_fin }Z` );
            let fechainicio = horaObj.setMinutes( horaObj.getMinutes() + 1 );
            let n_fecha_inicio = new Date(fechainicio).toISOString().split('T')[1].split('.')[0];
            
            // Calcular la nueva hora final del siguiente turno
            let horaObj2 = new Date( `${ turno.fecha_turno }T${ n_fecha_inicio }Z` );
            let fechafinal = horaObj2.setMinutes( horaObj2.getMinutes() + servicio.duracion );
            let n_fecha_final = new Date(fechafinal).toISOString().split('T')[1].split('.')[0];
            
            // Calcular si la nueva hora del turno supera la hora de cierre
            let objFechaCierre = new Date( `${ nueva_fecha }T${ servicio.hora_cierre }Z` );
            let objHoraTurnoSiguiente = new Date( `${ nueva_fecha }T${ n_fecha_inicio }Z` );
            let dif2 = objFechaCierre - objHoraTurnoSiguiente;
            let diff2 = dif2/(1000*60*60*24);
            
            if( diff2 < 0 ){
               msg.push( `El turno del día ${ nueva_fecha } no se pudo generar porque queda fuera del horario de trabajo.` ); 
            }else{
                await Turnos.create({
                    id_servicio,
                    fecha_turno: nueva_fecha,
                    hora_inicio: n_fecha_inicio,
                    hora_fin: n_fecha_final
                });
                msg.push( `El turno del día ${ nueva_fecha } fue registrado con exito` );
            }
        }else{
            // Hora de inicio de los turnos del día
            let n_fecha_inicio = servicio.hora_apertura;

            // Calcular la nueva hora final del siguiente turno
            let horaObj2 = new Date( `${ nueva_fecha }T${ n_fecha_inicio }Z` );
            let fechafinal = horaObj2.setMinutes( horaObj2.getMinutes() + servicio.duracion );
            let n_fecha_final = new Date(fechafinal).toISOString().split('T')[1].split('.')[0];

            await Turnos.create({
                id_servicio,
                fecha_turno: nueva_fecha,
                hora_inicio: n_fecha_inicio,
                hora_fin: n_fecha_final
            });
            msg.push( `El turno del día ${ nueva_fecha } fue registrado con exito` );
        }
    }

    return res.status(200).json({
        ok: true,
        msg
    })
}


module.exports = {
    obtenerTurnos,
    crearTurno
}