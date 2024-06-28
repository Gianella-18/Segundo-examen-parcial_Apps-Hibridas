const express = require('express');
const router = express.Router();
const Comentario = require('../models/Comentario');

// Ruta para obtener todos los comentarios
router.get('/', async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un comentario por su ID
router.get('/:id', async (req, res) => {
  try {
    const comentario = await Comentario.findById(req.params.id);
    if (comentario === null) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo comentario
router.post('/', async (req, res) => {
  const comentario = new Comentario({
    usuario: req.body.usuario,
    texto: req.body.texto,
  });
  try {
    const nuevoComentario = await comentario.save();
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
