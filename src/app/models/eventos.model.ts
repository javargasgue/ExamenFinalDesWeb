export class Eventos {
    nombreEvento:       string;
    descripcionEvento:  string;
    fechaEvento:        string;
    estadoEvento:       string;

    constructor( nombreEvento:      string, descripcionEvento: string, fechaEvento:       string, estadoEvento:      string  ){
        this.nombreEvento       = nombreEvento ;
        this.descripcionEvento  = descripcionEvento ;
        this.fechaEvento        = fechaEvento ;
        this.estadoEvento       = estadoEvento ;
    }
    
}
