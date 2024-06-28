const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/maquillaje_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
