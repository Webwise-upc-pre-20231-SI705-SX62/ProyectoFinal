import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { AddEditTrabajadorComponent } from './components/trabajador/add-edit-trabajador/add-edit-trabajador.component';
import { ListTrabajadorComponent } from './components/trabajador/list-trabajador/list-trabajador.component';
import { LadingPageComponent } from './components/lading-page/lading-page.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/trabajador/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    AddEditTrabajadorComponent,
    ListTrabajadorComponent,
    LadingPageComponent,
    MensajeConfirmacionComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // llamar angular material creado
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
