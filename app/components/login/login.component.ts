import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { Usuario } from '../../models/usuario';

//Servicios
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';

//Variable para jquery
declare var jQuery: any;

@Component({	
	selector: 'login',
	templateUrl: 'app/templates/login.html',
	styleUrls: ['../assets/css/superslides.css', '../assets/css/login.css'],
	providers: [UsuarioService, AuthService]
})

export class LoginComponent implements OnInit, AfterViewInit  {
	
	usuario: Usuario;
	message: string;

	//Inicializacion de variables o instancias
	constructor(
		private usuarioService: UsuarioService, 
		private authService: AuthService,		
  		private router: Router
	) 
	{
			this.usuario = new Usuario();
	}

	//Carga de procesos, llamada a funciones de servicios o providers
	ngOnInit() {
		if(this.authService.isLoggedIn()) {
			// code...
			this.router.navigate(['/admin']);
		}
	}

	//Invocado despues de la inicializacion de la vista del componente
	ngAfterViewInit(){		
	    jQuery(function() {
	    	jQuery('#slides').superslides({
		        hashchange: false,
		        play: 2000,
		        animation: 'fade',
		        pagination: false
		    });      
		});		
	}

	doLogin(){		
		let result = this.usuarioService.usuarioValido(this.usuario);
		if(result) {			
			this.authService.saveUser(result);
			jQuery('#slides').superslides('stop');
			this.router.navigate(['/admin']);
		}else{			
			this.message = 'Usuario y/o contraseña invalidos';
		}		
	}	
}