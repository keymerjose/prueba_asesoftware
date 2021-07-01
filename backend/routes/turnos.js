const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerTurnos, crearTurno } = require('../controllers/turnos');
const { validarIdServicio } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

// Obtener Servicios
router.get('/:id', obtenerTurnos);

// Crear turno
router.post('/',[
    check('id_servicio', 'El id_servicio es obligatorio').not().isEmpty(),
    check('fecha_inicio', 'La fecha inicio del turno es obligatoria').not().isEmpty(),
    check('fecha_final', 'La fecha inicio del turno es obligatoria').not().isEmpty(),
    check('id_servicio').custom( validarIdServicio ),
    validarCampos
], crearTurno );

module.exports = router;