import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import {AuthService} from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate{	
	
	//Inicializacion de servicios
	constructor(private authService: AuthService, private router: Router){}

	/**
	 * Funcion que valida si la siguiente ruta sera activada
	 * @return {boolean} flag para detener o avanzar la navegacion
	 */
	canActivate():boolean{
		console.log('Guardia de autenticacion #canActivate llamado');		

		//Validacion de usuario autenticado
		if(this.authService.isLoggedIn()) {
			return true;
		}
		this.router.navigate(['/login']);
		return false;
	}	
}