const express = require('express');
const router = express.Router();
const { obtenerProductos, obtenerProductoPorId, crearProducto } = require('../controllers/productosController');

// Ruta para obtener todos los productos
router.get('/', obtenerProductos);

// Ruta para obtener un producto por su ID
router.get('/:id', obtenerProductoPorId);

// Ruta para crear un nuevo producto
router.post('/', crearProducto);

module.exports = router;
