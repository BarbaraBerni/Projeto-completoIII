import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import logo from './img/musikdin-logo.png';
import conts from './img/cantora-contato.png';



function Login() {
    return (
        <>
            <div class="breadcrumb">
                <div class="col-12 breadcrumb-conteudo container">
                    <h1>Bem vindo de Volta!</h1>
                </div>
            </div>
            <div class="div-login">
                <div class="container d-flex">
                    <div class="col-12 row">
                        <div class="col-12 col-md-6 col-lg-6 d-flex img-forms">
                            <img src={conts} alt="Minha Figura" />
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 login-geral">
                            <div class="texto-forms row">
                                <h2>Cadastre-se</h2>
                                <p>Faça já seu cadastro e se prepare para o Show!</p>
                            </div>
                            <form class="row g-3">
                                <div class="col-md-12">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="E-mail*" />
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Senha*" />
                                    <div id="emailHelp" class="form-text"><a href="#">Esqueci minha senha</a></div>
                                </div>
                                <div class="col-12 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Lembrar</label>
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

export default Login

