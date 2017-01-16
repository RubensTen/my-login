import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { Usuario } from '../../models/usuario';

//Servicios
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';



@Component({	
	selector: 'login',
	templateUrl: 'app/templates/login.html',
	styleUrls: ['../assets/css/login.css'],
	providers: [UsuarioService, AuthService]
})

export class LoginComponent implements OnInit {
	
	usuario: Usuario;

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
	ngOnInit() {}

	doLogin(){		
		let result = this.usuarioService.usuarioValido(this.usuario);
		if(result) {
			console.log('generate token and save on ls');
			this.authService.saveUser(result);
			this.router.navigate(['/admin']);
		}else{
			console.log('usuario y/o contraseña invalidos');
		}		
	}
}