const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const app = express();
app.use(express.json())
const axios = require('axios')


app.get('/usuarios', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'bd_ususarios',
        password: '821160656'
    })

    connection.query('select * from tb_usuarios', (err, results, fields) => {
        res.send (results)
        res.send('ok')
    })
})
app.use(bodyParser.json()); /*analisa o corpo das solicitações HTTP*/


app.post('/eventos', (req, res) => {
    const evento = req.body;
    axios.post('http://localhost:3000/eventos', evento); /*Barramento do cadastro */
   // axios.post('http://localhost:3000/eventos', evento); {/*Barramento localizacao 
    axios.post('http://localhost:4000/eventos', evento); /*Envia o evento para o microservico de busca */
    res.status(200).send({msg: 'ok'});

});
app.put("/data", (req, res) => {    /*Atualização do banco de dados*/
    const Atualize = req.body;
    axios.put('http://localhost:3000', Atualize);
    res.status(200).send({msg: "Usuario cadastrado!"});
})
app.listen(5000, () => {
    console.log('Barramento de eventos de cadastro e localizacao. Posta 5000.')
})