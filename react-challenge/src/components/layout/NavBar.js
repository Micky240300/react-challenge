import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <a class="navbar-brand" href="#">
                <img src="study/study.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                <strong>KnowledgeDB</strong>
                </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <strong>Categorias</strong>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Frontend</a>
                        <a class="dropdown-item" href="#">Backend</a>
                        <a class="dropdown-item" href="#">Android</a>
                        <a class="dropdown-item" href="#">UI/UX Diseño</a>
                        <a class="dropdown-item" href="#">IOS</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><strong>Recursos</strong></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><strong>Q&A</strong></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><strong>Acerca de</strong></a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}