import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService implements OnInit {
  listTrabajador: Trabajador[] = [
    {
      nombreCompleto: 'Raul Nuñez Guzman', telefono: 984336652, correo: 'raul@gmail.com', sexo: 'masculino', dni: '71895816', direccion: 'MzN villaSalvador', servicio: 'Pintor', fechaNacimiento: new Date(), fechaIngreso: new Date()

    },
    {
      nombreCompleto: 'Raul Nuñez Guzman', telefono: 984336652, correo: 'raul@gmail.com', sexo: 'masculino', dni: '71895816', direccion: 'MzN villaSalvador', servicio: 'Pintor', fechaNacimiento: new Date(), fechaIngreso: new Date()
    },
    {
      nombreCompleto: 'Raul Nuñez Guzman', telefono: 984336652, correo: 'raul@gmail.com', sexo: 'masculino', dni: '71895816', direccion: 'MzN villaSalvador', servicio: 'Pintor', fechaNacimiento: new Date(), fechaIngreso: new Date()
    },
    {
      nombreCompleto: 'Raul Nuñez Guzman', telefono: 984336652, correo: 'raul@gmail.com', sexo: 'masculino', dni: '71895816', direccion: 'MzN villaSalvador', servicio: 'Pintor', fechaNacimiento: new Date(), fechaIngreso: new Date()
    },
    {
      nombreCompleto: 'Raul Nuñez Guzman', telefono: 984336652, correo: 'raul@gmail.com', sexo: 'masculino', dni: '71895816', direccion: 'MzN villaSalvador', servicio: 'Pintor', fechaNacimiento: new Date(), fechaIngreso: new Date()
    }
  ]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  getTrabajador() {
    return this.listTrabajador.slice();
  }
  eliminarTrabajador(index: number) {
    this.listTrabajador.splice(index, 1)
  }
}
