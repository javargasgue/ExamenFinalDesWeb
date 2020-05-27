import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../examen.reducer';

@Component({
  selector: 'app-editar-eventos',
  templateUrl: './editar-eventos.component.html',
  styleUrls: ['./editar-eventos.component.css']
})
export class EditarEventosComponent implements OnInit {
  
  misEventos ;
  nombreEvento : string ;
  descripcionEvento : string ;
  fechaEvento : string ;
  estadoEvento : string ;

  constructor( private store: Store<AppState>, public dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.store.subscribe(({ eventos }) => {
      this.misEventos = eventos ;
    });
  }
  abrirVentanaEmergente(): void {
      const dialogRef = this.dialog.open(EditarEmergente, {
        width: '300px',
        data: { Evento: this.misEventos }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result.nombreEvento === undefined) {
          alert('Datos Incompletos');
        }
        else {
          this.nombreEvento = result.nombreEvento ;
          for (let i = 0; i < this.misEventos.length; i++) {
            if(result.nombreEvento === this.misEventos[i].nombreEvento ){
              this.descripcionEvento = this.misEventos[i].descripcionEvento ;
              this.fechaEvento       = this.misEventos[i].fechaEvento ;
              this.estadoEvento      = this.misEventos[i].estadoEvento ;
            }
          }
         }
      });
  }

}
@Component({
  selector: 'editar.Emergente',
  templateUrl: 'editar.Emergente.html',
  styleUrls: ['./editar-eventos.component.css'],
})
export class EditarEmergente {
  constructor(public dialogRef: MatDialogRef<EditarEmergente>,
    @Inject(MAT_DIALOG_DATA) public data: { Evento, nombreEvento } ) { }
    onNoClick(): void {
    this.dialogRef.close();
  }
}
