import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';


@Component({	
	selector: 'login',
	templateUrl: 'app/templates/login.html',
	styleUrls: ['../assets/css/login.css'],
	providers: [UsuarioService]
})

export class LoginComponent implements OnInit {
	
	//Inicializacion de variables o instancias
	constructor(private usuarioService: UsuarioService) {
	}

	//Carga de procesos, llamada a funciones de servicios o providers
	ngOnInit() {}
}