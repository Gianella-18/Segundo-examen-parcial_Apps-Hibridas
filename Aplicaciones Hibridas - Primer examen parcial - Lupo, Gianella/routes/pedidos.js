const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

// Ruta para obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un pedido por su ID
router.get('/:id', async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (pedido === null) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo pedido
router.post('/', async (req, res) => {
  const pedido = new Pedido({
    usuario: req.body.usuario,
    productos: req.body.productos,
    total: req.body.total,
  });
  try {
    const nuevoPedido = await pedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
