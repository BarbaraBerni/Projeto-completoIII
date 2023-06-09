const express = require ('express');
const bodyParser = require('body-parser');
const axios = require('axios')

const app = express();


app.use(bodyParser.json());
app.use(express.json());

app.get('/api/data', (req, res) => {
    const data = {
      message: 'Cadastro realizado!'
    };
    res.json(data);
  });


let cadastro = {
nome: "nome: ",
cpf: "CPF: ",
endereco: "Endereço: ",
telefone: "Telefone: ",
email: "E-mail: ",
senha: "Senha: ",
};



app.put ('/cadastro', (req, res) => { //Aqui  o POST é uma rota para /cadastro que esta no terminal e dai */
    
    const { nome, cpf, endereco, telefone, email, senha } = req.body;
    cadastro = {
        nome, cpf, endereco, telefone, email, senha};
        cadastro = { nome, cpf, endereco, telefone, email,senha, };
});
app.post ('/cadastro', async (req, res) => {
const { tipo, dados } = req.body;
if (tipo === "Usuario01") {
    await axios.post("http://localhost:4000/eventos", {
        tipo: "NovoUsuario",
        dados: {
            nome: dados.nome,
            cpf: dados.cpf,
            endereco: dados.endereco,
            telefone: dados.telefone,
            email: dados.email,
            senha: dados.senha,

},
    });
}
res.status(201).send(cadastro[dados]);
res.status(200).send("Usuario cadastro com sucesso!");
});
        
       /* nome: "Maria",
        idade: "" ,
        email: " @gmail.com",
        senha: " ",
        cpf: "   .   .   -  "*/
/*app.listen (4000, () => {
    console.log('Cadastro rodando na Porta 4000')
});*/
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

