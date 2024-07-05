const express = require('express');
const router = express.Router();
const { obtenerPedidos, obtenerPedidoPorId, crearPedido } = require('../controllers/pedidosController');

// Ruta para obtener todos los pedidos
router.get('/', obtenerPedidos);

// Ruta para obtener un pedido por su ID
router.get('/:id', obtenerPedidoPorId);

// Ruta para crear un nuevo pedido
router.post('/', crearPedido);

module.exports = router;

