import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="p-4" id="title"><strong>¿QUE DESEAS APRENDER?</strong></h1>
                    <p class="lead" id="subtitle"><strong>Aprende sobre programación desde cero, diseño UI/UX y mucho mas con Knowledge DB</strong></p>
                    <input class="form-control text-center" id="form" type="text" placeholder="¿Que deseas aprender hoy?"></input>
                    <button type="button" id="botonhermoso" class="btn btn-primary btn-lg mt-5"><b>Buscar recursos</b></button>
                </div>
            </div>
        );
    }
}


