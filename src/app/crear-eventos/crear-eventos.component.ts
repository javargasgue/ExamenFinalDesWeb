import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../examen.reducer';
import { crearEventos, editarEventos } from '../examen.actions';

@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styleUrls: ['./crear-eventos.component.css'],
})
export class CrearEventosComponent implements OnInit {

  @Input() nombreEvento      : string ;
  @Input() descripcionEvento : string ;
  @Input() fechaEvento       : string ;
  @Input() estadoEvento      : string ;
  validacion =0;

  constructor( private store: Store<AppState> ) {
  }

  ngOnInit(): void {
  }
  guardarEvento(){
    if(this.nombreEvento === undefined || this.descripcionEvento === undefined || this.fechaEvento === undefined || this.estadoEvento === undefined ||
       this.nombreEvento === null || this.descripcionEvento === null || this.fechaEvento === null || this.estadoEvento === null ||
       this.nombreEvento === "" || this.descripcionEvento === "" || this.fechaEvento === "" || this.estadoEvento === ""  ){
        var r = alert("Datos Incompletos");
    }
    else{
      this.store.dispatch( crearEventos({ 
        nombreEvento :      this.nombreEvento,
        descripcionEvento : this.descripcionEvento,
        fechaEvento :       this.fechaEvento,
        estadoEvento :      this.estadoEvento
      })); 
      this.validacion=1;
      this.limpiar();     
      var r = alert("Registro exitoso");
    }
  }
  editarEventos(){
    if(this.nombreEvento === undefined || this.descripcionEvento === undefined || this.fechaEvento === undefined || this.estadoEvento === undefined ||
      this.nombreEvento === null || this.descripcionEvento === null || this.fechaEvento === null || this.estadoEvento === null ||
      this.nombreEvento === "" || this.descripcionEvento === "" || this.fechaEvento === "" || this.estadoEvento === ""  ){
       var r = alert("Datos Incompletos");
   }
   else{
     this.store.dispatch( editarEventos({ 
      nombreEvento :      this.nombreEvento,
      descripcionEvento : this.descripcionEvento,
      fechaEvento :       this.fechaEvento,
      estadoEvento :      this.estadoEvento
    }));
   this.validacion=1;
   this.limpiar(); 
    var r = alert("Registro actualizado");
    }
  }
  limpiar(){
    this.nombreEvento = "" ;
    this.descripcionEvento = "" ;
    this.fechaEvento = "" ;
    this.estadoEvento = "" ;
    if (this.validacion===0){
   var r = alert("Campos limpios");
   }
   this.validacion=0;
  }

}
