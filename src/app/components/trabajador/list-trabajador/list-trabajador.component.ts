import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { Trabajador } from 'src/app/models/trabajador';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-trabajador',
  templateUrl: './list-trabajador.component.html',
  styleUrls: ['./list-trabajador.component.css']
})
export class ListTrabajadorComponent implements OnInit {
  displayedColumns: string[] = ['nombreCompleto', 'telefono', 'correo', 'sexo', 'dni', 'direccion', 'servicio', 'fechaNacimiento', 'fechaIngreso', 'acciones'];
  dataSource = new MatTableDataSource<Trabajador>([]);
  listTrabajadro: Trabajador[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private trabajadorService: TrabajadorService, public dialog: MatDialog,
    public snackbar: MatSnackBar) {
    this.listTrabajadro = [];
  }
  ngOnInit(): void {
    this.cargarTrabajador();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  cargarTrabajador() {
    this.listTrabajadro = this.trabajadorService.getTrabajador();
    this.dataSource = new MatTableDataSource(this.listTrabajadro);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.listTrabajadro);
  }
  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar al trabajador ' },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.trabajadorService.eliminarTrabajador(index);
        this.cargarTrabajador();
        this.snackbar.open('El trabajador eliminadocon exito!', '', {
          duration: 3000
        });
      }
    });

  }
}
