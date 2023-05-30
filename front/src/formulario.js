import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import logo from './img/musikdin-logo.png';
import conts from './img/cantora-contato.png';

function Formulario() {
    return (
        <>
            <div class="div-contato">
                <div class="container d-flex">
                    <div class="col-12 row">
                        <div class="col-12 col-md-6 col-lg-6 d-flex img-forms">
                            <img src={conts} alt="Minha Figura" />
                        </div>
                        <div class="col-12 col-md-6 col-lg-6">
                            <div class="texto-forms row">
                                <h2>Entre em Contato!</h2>
                                <p>Preencha o formulário e nos diga que tipo de palco você busca!</p>
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
                                    <input type="text" class="form-control" id="inputSubject" placeholder="Assunto*" />
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
                                <div class="col-md-12">
                                    <textarea class="form-control txtmensagens" placeholder="Mensagem" id="floatingTextarea2"></textarea>
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

export default Formulario