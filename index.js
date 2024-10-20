const express = require('express');
const path = require('path');
const app = express();



// Configurar a pasta pública
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
  
  res.sendFile('index');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
