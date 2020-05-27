import { createAction, props } from '@ngrx/store';

export const crearEventos = createAction(
    '[Eventos] Crear Eventos',
    props<{
        nombreEvento:       string, 
        descripcionEvento:  string,
        fechaEvento:        string,
        estadoEvento:       string,
    }>()
);
/*export const consultarEventos = createAction( 
    '[Eventos], consultarEventos',    
);*/
export const editarEventos  = createAction( 
    '[Eventos], editarEventos',
    props<{
        nombreEvento:       string, 
        descripcionEvento:  string,
        fechaEvento:        string,
        estadoEvento:       string,
    }>()
);
