// Importar los módulos necesarios
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Crear la aplicación Express
const app = express();

// Configurar bodyParser para parsear los cuerpos de las solicitudes como JSON
app.use(express.json());
const port = process.env.PORT ?? 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/maquillaje_db', {
});

// Definir los modelos de datos utilizando Mongoose
const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
});
const Usuario = mongoose.model('Usuario', UsuarioSchema);

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  cantidadDisponible: { type: Number, required: true, min: 0 },
});
const Producto = mongoose.model('Producto', ProductoSchema);

// Ruta para obtener todos los productos
app.get('/api/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un producto por su ID
app.get('/api/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto === null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo producto
app.post('/api/productos', async (req, res) => {
  const producto = new Producto({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    cantidadDisponible: req.body.cantidadDisponible,
  });
  try {
    const nuevoProducto = await producto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para actualizar un producto existente por su ID
app.put('/api/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (producto === null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    // Actualizar los campos del producto
    producto.nombre = req.body.nombre;
    producto.descripcion = req.body.descripcion;
    producto.precio = req.body.precio;
    producto.cantidadDisponible = req.body.cantidadDisponible;
    // Guardar los cambios
    const productoActualizado = await producto.save();
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint para eliminar un producto por su ID
app.delete('/api/productos/:id', async (req, res) => {
  try {
    // const producto = await Producto.findById(req.params.id);
    const producto = await Producto.findById(req.params);
    if (producto === null) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    await producto.remove();
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para manejar errores de ruta no encontrada
// app.use((req, res, next) => {
//   res.status(404).json({ message: 'Ruta no encontrada' });
// });

// // Middleware para manejar errores generales
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Error interno del servidor' });
// });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
