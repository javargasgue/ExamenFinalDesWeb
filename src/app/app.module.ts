import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearEventosComponent } from './crear-eventos/crear-eventos.component';
import { EditarEventosComponent, EditarEmergente } from './editar-eventos/editar-eventos.component';
import { ConsultarEventosComponent } from './consultar-eventos/consultar-eventos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { appReducers } from './examen.reducer';
import { StoreModule } from '@ngrx/store';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    CrearEventosComponent,
    EditarEventosComponent,
    ConsultarEventosComponent,
    EditarEmergente
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    StoreModule.forRoot(  appReducers ),    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    EditarEmergente
  ]

})
export class AppModule { }
