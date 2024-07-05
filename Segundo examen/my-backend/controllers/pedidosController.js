const Pedido = require('../models/Pedido');

// Obtener todos los pedidos
const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un pedido por su ID
const obtenerPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo pedido
const crearPedido = async (req, res) => {
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
};

module.exports = {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
};
