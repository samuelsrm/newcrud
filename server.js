const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Esta linha libera AUTOMATICAMENTE o acesso a todos os seus arquivos
// (.html, .css, imagens e todos os seus vários arquivos .js de front-end)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});