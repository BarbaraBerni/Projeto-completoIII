const express = require ('express');
const app = express();
const cadastro = {};

app.use(express.json());

app.post ('/cadastro', (req, res) => { /* Aqui  o POST é uma rota para /cadastro que esta no terminal e dai */
    const novoUsuario = req.body;
    cadastro.push(novoUsusario);
    res.status(201).json(novoUsuario)
});
app.listen (4000, () => {
    console.log('Cadastro rodando na Porta 4000')
});
