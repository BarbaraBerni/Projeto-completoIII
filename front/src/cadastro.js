import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
// App from './index';
import './css/style.css';
import logo from './img/musikdin-logo.png';
import conts from './img/cantora-contato.png';
import axios from 'axios';
//import data from "./microservico_cadastro";

const cadastro = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:3000');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
}, []);

const enviarDadosParaMicroservico = async () => {
    try {
      await axios.post('http://localhost:3000/eventos', {
        tipo: 'usuarioNovo',
        dados: { usuarios } // dados que deseja enviar para o microserviço
      });
      // Atualize os dados novamente após a requisição POST, se necessário
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };
return (
<div>
   {/*<div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Search</h1>
            </div>
        </div>
</div>*/}
  </div>
);
};




function Cadastro() {
    return (
        <>
            <div class="breadcrumb">
                <div class="col-12 breadcrumb-conteudo container">
                    <h1>Cadastro</h1>
                </div>
            </div>
            <div class="div-contato">
                <div class="container d-flex">
                    <div class="col-12 row">
                        <div class="col-12 col-md-6 col-lg-6 d-flex img-forms">
                            <img src={conts} alt="Minha Figura" />
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="texto-forms row">
                                <h2>Cadastre-se</h2>
                                <p>Faça já seu cadastro e se prepare para o Show!</p>
                            </div>
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control" id="inputName" placeholder="Nome*" />
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="E-mail*" />
                                </div>
                                <div class="col-md-6">
                                    <input type="tel" class="form-control" id="inputPhone" placeholder="Telefone*" />
                                </div>
                                <div class="col-md-6">
                                    <select id="inputState" class="form-select">
                                        <option selected>Serviço</option>
                                        <option>Banda/musico</option>
                                        <option>Estabelecimento</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Senha*" />
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Endereço*" />
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Complemento" />
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" id="inputCity" placeholder="Cidade*" />
                                </div>
                                <div class="col-md-4">
                                    <select id="inputState" class="form-select">
                                        <option selected>Estado</option>
                                        <option>AC</option>
                                        <option>AL</option>
                                        <option>AP</option>
                                        <option>AM</option>
                                        <option>BA</option>
                                        <option>CE</option>
                                        <option>ES</option>
                                        <option>GO</option>
                                        <option>MA</option>
                                        <option>MT</option>
                                        <option>MS</option>
                                        <option>MG</option>
                                        <option>PA</option>
                                        <option>PB</option>
                                        <option>PR</option>
                                        <option>PE</option>
                                        <option>PI</option>
                                        <option>RJ</option>
                                        <option>RN</option>
                                        <option>RS</option>
                                        <option>RO</option>
                                        <option>RR</option>
                                        <option>SC</option>
                                        <option>SP</option>
                                        <option>SE</option>
                                        <option>TO</option>
                                        <option>DF</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control" id="inputZip" placeholder="N°" />
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control" id="inputCep" placeholder="CEP" />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-formsc">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro

