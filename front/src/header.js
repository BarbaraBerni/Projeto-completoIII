import React from 'react';
import ReactDOM from 'react-dom'
import './css/style.css';
import logo from './img/musikdin-logo.png';
import Body from './body';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faMagnifyingGlass)

function Header() {

    return (
        <section id="header">
            <nav class="navbar navbar-expand-lg navbar-main">
                <div class="container">
                    <div class="col-8 col-lg-2 col-xxl-4">
                        <a class="navbar-brand" href="#"><img class="logo-header" width="247" height="58" src={logo} alt="Musikdin" /></a>
                    </div>
                    <div class="col-4 d-lg-none text-end">
                        <button class="navbar-toggler" title="Expandir" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarMain" aria-controls="navbarMain">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="col-12 col-lg-10 col-xxl-8">
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarMain">
                            <div class="offcanvas-header justify-content-end">
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end align-items-lg-center flex-grow-1 pe-3">
                                    <li class="nav-item"><a class="nav-link" href={Body}>Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Serviços</a></li>
                                    <li class="nav-item"><form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                                        <button class="btn btn-outline-success pesquisa-estilo" type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
                                    </form>
                                    </li>
                                    <li class="nav-item"><button target="_blank" class="btn-header" href="#">Fazer login</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;