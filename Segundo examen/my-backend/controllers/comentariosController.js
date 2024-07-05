const express = require('express');
const router = express.Router();
const { obtenerUsuarios, obtenerUsuarioPorId, crearUsuario } = require('../controllers/usuariosController');

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', obtenerUsuarioPorId);

// Ruta para crear un nuevo usuario
router.post('/', crearUsuario);

module.exports = router;
