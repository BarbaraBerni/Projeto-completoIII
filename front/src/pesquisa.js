import 'bootstrap/dist/css/bootstrap.min.css'
import React , { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import cardb from './img/card-band.png'
import carde from './img/card-estabelecimento.png'
import axios from 'axios';
import fetch from 'node-fetch';
//import busca from "./microservico_busca"

const Busca = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:4000');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
}, []);

const enviarDadosParaMicroservico = async () => {
    try {
      await axios.post('http://localhost:4000/eventos', {
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
function Pesquisa() {
    return (   
        <>
            <div class="breadcrumb">
                <div class="col-12 breadcrumb-conteudo container">
                    <h1>Resultados</h1>
                </div>
            </div>
            <div class="div-servicos">
                <div class="container">
                    <div class="col-12 row">
                        <div class="col-12 text-center titulo-servicos">
                            <h2>Itens encontrados</h2>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Musico</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row">
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Musico</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row">
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Musico</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row">
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Musico</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 row">
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Musico</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-4">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={carde} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Estabelecimento</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Pesquisa;