import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import logo from './img/musikdin-logo.png';
import quems from './img/img-quems.png';
import conts from './img/cantora-contato.png';
import cardb from './img/card-band.png'
import carde from './img/card-estabelecimento.png'

function Body() {
    return (
        <>
            <div class="banner">
                <div class="col-12 banner-conteudo container">
                    <h1>Bem vindo ao Musikdin</h1>
                    <p>Descubra o palco perfeito para a sua música!</p>
                    <a href="#" class="btn-banner">Saiba mais</a>
                </div>
            </div>

            <div class="div-quems">
                <div class="container d-flex">
                    <div class="col-12 row">
                        <div class="col-12 col-md-6 col-lg-6">
                            <h1>Conheça o Musikdin</h1>
                            <p>
                                Nossa ideia com esse site é fazer com que bandas e locais para show consigam se encontrar de uma forma mais simples e prática, fornecendo um serviço para que eles possam se cadastrar e colocar suas informações de preferência, após realizar o cadastro as bandas iram aparecer em uma espécie de catalogo para que pessoas que buscam musicos para tocar em shows e festas possam procurar de acordo com seus gostos e caso tenham interesse na banda ou músico eles podem simplismente enviar menagem diretamente para eles e decidirem como iram prosseguir, assim como bandas podem procurar locais que os agredem ou sejam mais próximos de onde eles estão. 
                            </p>
                            <a href="#" class="btn-banner">Saiba mais</a>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                            <img src={quems} alt="Minha Figura" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="div-servicos">
                <div class="container">
                    <div class="col-12 row">
                        <div class="col-12 text-center titulo-servicos">
                            <h2>Conheça nossos serviços</h2>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={cardb} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Musico</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
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

export default Body;