const express = require('express');
const router = express.Router();
const { obtenerComentarios, obtenerComentarioPorId, crearComentario } = require('../controllers/comentariosController');

// Ruta para obtener todos los comentarios
router.get('/', obtenerComentarios);

// Ruta para obtener un comentario por su ID
router.get('/:id', obtenerComentarioPorId);

// Ruta para crear un nuevo comentario
router.post('/', crearComentario);

module.exports = router;

