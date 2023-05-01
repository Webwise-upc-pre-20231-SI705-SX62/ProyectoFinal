import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageComponent } from './components/lading-page/lading-page.component';
//import { ListTrabajadorComponent } from './components/trabajador/list-trabajador/list-trabajador.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddEditTrabajadorComponent } from './components/trabajador/add-edit-trabajador/add-edit-trabajador.component';
import { ListTrabajadorComponent } from './components/trabajador/list-trabajador/list-trabajador.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LadingPageComponent },
  {
    path: 'trabajador', component: TrabajadorComponent, children: [
      { path: '', component: ListTrabajadorComponent },
      { path: 'add', component: AddEditTrabajadorComponent },
      { path: 'edit/:id', component: AddEditTrabajadorComponent },
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'landing-page', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
