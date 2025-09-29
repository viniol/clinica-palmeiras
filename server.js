
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/lead', (req, res) => {
  const { nome, telefone, pet } = req.body;
  console.log('Novo lead:', { nome, telefone, pet });

  // Aqui você pode integrar com banco de dados, Google Sheets, etc.

  res.send(`
    <script>
      alert('Obrigado ${nome}, recebemos seus dados! Vamos te chamar no WhatsApp.');
      window.location.href = 'https://wa.me/5522999685777';
    </script>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
