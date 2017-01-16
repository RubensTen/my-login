import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

//localstorage service
import {LocalStorageService} from 'ng2-webstorage';


@Injectable()
export class AuthService {
	
	constructor(private ls: LocalStorageService) {}

	/**
	 * Guarda el usuario en el localstorage
	 * @param {Usuario} usuario autenticado
	 */
	saveUser(usuario:Usuario): void {
		this.ls.store('usr', JSON.stringify(usuario));	
	}

	/**
	 * Funcion que verifica si el usuario esta autenticado
	 * @return {boolean} true-autenticado, false-no autenticado
	 */
	isLoggedIn(): boolean{
		let usr = this.ls.retrieve('usr');
		if(usr) {
			// code...
			return true;
		}
		return false;
	}

	/**
	 * Obtiene la info del usuario autenticado
	 * @return {Usuario} usuario autenticado
	 */
	getUser(): Usuario {
		let usuario:Usuario = JSON.parse(this.ls.retrieve('usr')) || {};		
		return usuario;
	}

	/**
	 * Elimina el usuario autenticado
	 */
	deleteUser(): void{
		this.ls.clear('usr');
	}
}