import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';
import { USUARIOS } from '../mocks/mock-usuarios';

@Injectable()
export class UsuarioService{
	
	/**
	 * Retorna el usuario coincidente con su email y password
	 * @param  {Usuario} usuario a buscar
	 * @return {Usuario}         usuario encontrado
	 */
	usuarioValido(usuario: Usuario): Usuario {		
		let usuarioResult: Usuario[] = USUARIOS.map(usuarioMap => {
			if(usuarioMap.email === usuario.email && usuarioMap.password === usuario.password) {
				return usuarioMap;
			}
			return null;
		});		
		return usuarioResult[0] || undefined;
	}
}

