const { response } = require("express");
const Servicios = require("../models/servicios");

const obtenerServicios = async(req, res = response) => {
    const { id } = req.params;
    const data = await Servicios.findAll({
        where: {
            id_comercio: id
        }
    });
    return res.status(200).json(
        data ? data : []
    );
}

module.exports = {
    obtenerServicios
}