const express = require ("express");
const app = express();
app.use(express.json());

/*
app.get('/usuarios:id/observacoes', (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || []);
});
*/
const pesquisa = {};
const funcao = {
  usuarioNovo: (cadastro) => {
    pesquisa[cadastro.contador] = cadastro
  },
 /* const express = require("express");
2 const app = express();
3 app.use(express.json());
4
5 app.get("/lembretes", (req, res) => {});
6
7 app.post("/eventos", (req, res) => {});
8
9 app.listen(6000, () => console.log("Consultas. Porta 6000"));


  /*
  novaLocalizacao: (localizacao) => {
    const localizacao =
    pesquisa[localizacao.cadastroId]["Localizacao"]
    [];
    localizacao.push(localizacao);
    pesquisa[localizacao.cadastroId]['localizacao'] =
    localizacao;
  }
};
  */
}

app.get("/usuarios", (req,res) => {
  res.status(200).send(pesquisa);
}); /*Lógica da pesquisa*/
app.post("/eventos", (req, res) => {
  funcao[req.body.tipo](req.body.dados);
  res.status(200).send(pesquisa);
});

app.listen(4000, () => console.log("Consulta. Porta 4000"));