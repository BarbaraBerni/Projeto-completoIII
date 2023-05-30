import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import logo from './img/musikdin-logo.png';
import axios from 'axios';


function Footer() {
    return (
        <div class="div-footer">
            <div class="container d-flex">
                <div class="col-12 row">
                    <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                        <a class="navbar-brand" href="#"><img class="logo-footer" width="247" height="58" src={logo} alt="Musikdin" /></a>
                        <p class="slogan-footer">
                            Harmonize seu talento e encontre o palco perfeito. Uma sinfonia de oportunidades para músicos e palcos se encontrarem.
                        </p>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                        <p class="h2">Navegação</p>
                        <ul class="list-unstyled list-footer d-flex flex-column">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Avaliações</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                        <p class="h2">Serviços</p>
                        <ul class="list-unstyled list-footer d-flex flex-column">
                            <li><a href="#">Encontrar Músico</a></li>
                            <li><a href="#">Encontrar Banda</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3 col-lg-3 colunas-footer">
                        <p class="h2">Informações</p>
                        <ul class="list-unstyled list-footer d-flex flex-column">
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;