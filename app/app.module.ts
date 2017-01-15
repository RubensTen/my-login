/**
 * Modulo raiz de la aplicación
 * Construccion de la aplicacion y el inicio
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //modulo para la ejecucion en browsers
import { RouterModule, Routes } from '@angular/router';//Routing

import { AppComponent }  from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/notfound/notfound.component';

//Configuracion de rutas
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  /*{ path: 'contact', component: ContactComponent },  */
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];


//Decorador modulo para identificar como compilar y ejecutar la aplicacion
@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, AboutComponent, ContactComponent, NotFoundComponent],//Componentes, Directivas o Pipes que pertenecen a la aplicación
  bootstrap:    [ AppComponent ] //componente raiz para ser insertado en el html
})
export class AppModule { }
