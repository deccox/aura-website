const express = require('express');
const path = require('path');
const app = express();



// Configurar a pasta pública
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do motor de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Aponte para a pasta de views


app.get('/', (req, res) => {
  const items = [
    {
      img: '/assets/prod1.png',
      nameItem: 'Serum Ameixa',
      valor: 'R$600,00',
      parcelado: '6x R$60,00'
    },
    {
      img: '/assets/prod1.png',
      nameItem: 'Serum Abacaxi',
      valor: 'R$600,00',
      parcelado: '6x R$60,00'
    },
    {
      img: '/assets/prod1.png',
      nameItem: 'Serum Morango',
      valor: 'R$600,00',
      parcelado: '6x R$60,00'
    },
    {
      img: '/assets/prod1.png',
      nameItem: 'Serum Morango',
      valor: 'R$600,00',
      parcelado: '6x R$60,00'
    },
  ];
  res.render('index', { items });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
