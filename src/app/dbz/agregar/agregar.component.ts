import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbx.interface';

import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
})
export class AgregarComponent {

    @Input() nuevo: Personaje = {
        nombre: '',
        poder: 0
    }

    //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
    //para emitir un evento 

    constructor(private dbzService: DbzService) { }

    agregar() {
        if (this.nuevo.nombre.trim().length === 0) { return; }

        // this.onNuevoPersonaje.emit(this.nuevo)
        this.dbzService.agregarPersonaje(this.nuevo);

        this.nuevo = {
            nombre: '',
            poder: 0
        }


    }
}
