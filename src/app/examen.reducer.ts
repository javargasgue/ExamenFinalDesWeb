import { Eventos } from './models/eventos.model';
import { Estados } from './models/estados.model';
import { ActionReducerMap } from '@ngrx/store';
import { on, createReducer } from '@ngrx/store';
import { crearEventos, editarEventos  } from './examen.actions'; //consultarEventos

export interface AppState {
    eventos:     Eventos[] ,
}
export const appReducers: ActionReducerMap<AppState> = {
    eventos: eventos ,
}
export const estadoInicial: Eventos[] = [
    new Eventos('Escarlar'    ,  'Deporte de Alto Riesgo',      '2020-05-24',      'Iniciado'   ),
    new Eventos('Ajedrez'     ,  'Deporte Ciencia',             '2020-05-23',      'En_Curso'   ),
    new Eventos('Class Royale',  'Video Juego',                 '2020-05-21',      'Finalizado' ),
];
const _eventos = createReducer(estadoInicial, 
    on(crearEventos, ( state, 
        { nombreEvento, descripcionEvento, fechaEvento, estadoEvento } ) => 
        [...state, new Eventos( nombreEvento, descripcionEvento, fechaEvento, estadoEvento ) ]
    ),
    on(editarEventos,( state, 
        { nombreEvento, descripcionEvento, fechaEvento, estadoEvento } ) => {
        return state.map( Eventos => {
            if ( Eventos.nombreEvento === nombreEvento ) {
                return {
                  ...Eventos, descripcionEvento, fechaEvento, estadoEvento
                };
            } else {
                return Eventos;
            }
        });
    }),
    
)
export function eventos( state, action){
    return _eventos(state,action);
}

