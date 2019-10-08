import React, { Component } from 'react';

import Logo from './react1.png';
import Logo2 from './angular1.png';
import Logo3 from './hooks1.png';
import Logo4 from './angular2.png';
import Logo5 from './kotlin1.png';
import Logo6 from './vue1.png';


export default class Card extends Component {
    render() {
        return (
            <div class="container">

                <div class="container"> 
                    <div class="row text-center">
                        <div class="col-12">
                            <h5><strong class="text-center">Recursos Destacados</strong></h5>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-sm mt-2">
                            <div class="card">
                                <img
                                    className="card-img-top rounded mx-auto d-block" 
                                    src={Logo} 
                                    alt="card"
                                />
                                <div class="card-body p-2">
                                    <h7 class="card-title"><strong>Aprende React.js desde cero</strong></h7>
                                    <a href="#" id="vercurso" class="btn btn-primary">Ver el curso</a>
                                </div>
                            </div>
                    </div>

                    <div class="col-sm mt-2">
                        <div class="card">
                                    <img
                                        className="card-img-top rounded mx-auto d-block" 
                                        src={Logo2} 
                                        alt="card"
                                    />
                                    <div class="card-body p-2">
                                        <h7 class="card-title"><strong>Curso de Angular desde cero</strong></h7>
                                        <a href="#" id="vercurso" class="btn btn-primary">Ver el curso</a>
                                    </div>
                        </div>
                    </div>

                    <div class="col-sm mt-2">
                        <div class="card">
                                <img
                                    className="card-img-top rounded mx-auto d-block" 
                                    src={Logo3} 
                                    alt="card"
                                />
                                <div class="card-body p-2">
                                    <h7 class="card-title"><strong>Aprende los hooks de React</strong></h7>
                                    <a href="#" id="vercurso" class="btn btn-primary">Ver el curso</a>
                                </div>
                        </div>
                    </div>

                </div>

                <div class="row mt-5">
                    <div class="col-sm">
                                <div class="card">
                                    <img
                                        className="card-img-top rounded mx-auto d-block" 
                                        src={Logo4} 
                                        alt="card"
                                    />
                                    <div class="card-body p-2">
                                        <h7 class="card-title"><strong>Curso basico de Angular JS</strong></h7>
                                        <a href="#" id="vercurso" class="btn btn-primary">Ver el curso</a>
                                    </div>
                                </div>
                    </div>

                    <div class="col-sm">
                            <div class="card">
                                <img
                                    className="card-img-top rounded mx-auto d-block" 
                                    src={Logo5} 
                                    alt="card"
                                />
                                <div class="card-body p-2">
                                    <h7 class="card-title"><strong>Aprende Kotlin desde cero</strong></h7>
                                    <a href="#" id="vercurso" class="btn btn-primary">Ver el curso</a>
                                </div>
                            </div>
                    </div>

                    <div class="col-sm">
                            <div class="card">
                                <img
                                    className="card-img-top rounded mx-auto d-block" 
                                    src={Logo6} 
                                    alt="card"
                                />
                                <div class="card-body p-2">
                                    <h7 class="card-title"><strong>Curso de Vue.js desde cero</strong></h7>
                                    <a href="#"  id="vercurso" class="btn btn-primary">Ver el curso</a>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        );
    }
}