const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// opcional: ruta raíz muestra un OK simple
app.get('/', (_req, res) => {
  res.send('Galerías online. Abrí /galeriaroller.html');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
