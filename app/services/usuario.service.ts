import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';
import { USUARIOS } from '../mocks/mock-usuarios';

@Injectable()
export class UsuarioService{
	auth(usuario: Usuario) {
		console.log('array de usuarios: ', USUARIOS);		
	}
}

