import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({	
	selector: '',
	templateUrl: 'app/templates/admin.html',
	styleUrls: [
		'../assets/css/bootstrap.min.css',
		'../assets/css/bootstrap-responsive.min.css',		
		'../assets/css/matrix-style.css',
		'../assets/css/matrix-media.css'
	]
})

export class AdminComponent implements OnInit {
	
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	logout():void{
		this.authService.deleteUser();
		this.router.navigate(['/']);
	}
}