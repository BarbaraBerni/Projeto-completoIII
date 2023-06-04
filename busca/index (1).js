const express = require ("express");
const app = express();
app.use(express.json());

const basePesquisa = {};

const funcao = {
  NovoUsuario: (cadastro) => {
    basePesquisa[cadastro.dados] = cadastro;
  },
  PesquisarUsuario: (dados) => {
    return basePesquisa[dados];
    }
};

app.get ("/cadastro", (req, res) => {
  res.status(200).send(basePesquisa);
});
app.post ("/eventos", (req, res) => {
  funcao[req.body.tipo] (req.body.dados);
  res.status(200).send(basePesquisa);

});
app.listen(4000, () => console.log ("Consulta. Posta 4000"));
