import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../examen.reducer';

@Component({
  selector: 'app-consultar-eventos',
  templateUrl: './consultar-eventos.component.html',
  styleUrls: ['./consultar-eventos.component.css']
})
export class ConsultarEventosComponent implements OnInit {
  misEventos ;  
  constructor( private store: Store<AppState> ) { 
  }
  ngOnInit(): void {
    this.store.subscribe(({ eventos }) => {
      this.misEventos = eventos ;
      this.dataSource = this.misEventos ;
    });
  }
  displayedColumns: string[] = ['nombreEvento', 'descripcionEvento', 'fechaEvento', 'estadoEvento'];
  dataSource ;
}