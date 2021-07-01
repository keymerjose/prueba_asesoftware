const { response } = require("express");
const Comercios = require('../models/comercios');

const obtenerComercios = async(req, res = response) => {
    const data = await Comercios.findAll();
    return res.status(200).json({
        ok: true,
        data: (data) ? data : []
    });
}

module.exports = {
    obtenerComercios
}