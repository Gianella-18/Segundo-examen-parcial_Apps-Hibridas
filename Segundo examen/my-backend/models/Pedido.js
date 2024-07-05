const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true }],
  total: { type: Number, required: true },
});

module.exports = mongoose.model('Pedido', pedidoSchema);
