/**
 * Modulo raiz de la aplicación
 * Construccion de la aplicacion y el inicio
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //modulo para la ejecucion en browsers
import { RouterModule, Routes } from '@angular/router';//Routing
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

//Public components
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

//Admin components
import { AdminComponent } from './components/admin/admin.component';
import { DashComponent } from './components/dash/dash.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

//Importacion del servicio de autenticacion
import { AuthGuardService } from './services/auth.guard.service';

//localstorage module
import {Ng2Webstorage} from 'ng2-webstorage';

import { AuthService } from './services/auth.service';





//Configuracion de rutas
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          { path: 'profile', component: ProfileComponent },
          { path: 'settings', component: SettingsComponent },
          { path: '', component: DashComponent}         
        ]
      }
    ]
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];


//Decorador modulo para identificar como compilar y ejecutar la aplicacion
@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    Ng2Webstorage
  ],
  declarations: [ //Componentes, Directivas o Pipes que pertenecen a la aplicación
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    AdminComponent,
    DashComponent,
    ProfileComponent,
    SettingsComponent
  ],
  providers: [AuthService, AuthGuardService], //servicios disponibles para toda la aplicacion
  bootstrap:    [ AppComponent ] //componente raiz para ser insertado en el html
})
export class AppModule { }
