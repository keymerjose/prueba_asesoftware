const { Router } = require('express');
const { obtenerComercios } = require('../controllers/comercios');
const router = Router();

// Obtener Comercios
router.get('/', obtenerComercios);

module.exports = router;