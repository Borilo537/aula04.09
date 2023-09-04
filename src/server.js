// importar o pacote do express para nossa aplicação
const express = require('express');

// instanciar o express na variavel app
const app = express();

// definir a porta do servidor
const PORT = 3006;

// testar um rota set
app.get('/segundoApi', (request, response) => (
    response.send('Teste a rota no express')
))

// testar o servidor
app.listen(PORT, () => console.log
 (`Runnig at port ${PORT}`));