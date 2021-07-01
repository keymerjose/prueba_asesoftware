const { Router } = require('express');
const { obtenerServicios } = require('../controllers/servicios');
const router = Router();

// Obtener Servicios
router.get('/:id', obtenerServicios);

module.exports = router;