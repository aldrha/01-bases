import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbx.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
})
export class MainPageComponent {


    nuevo: Personaje = {
        nombre: 'Maestro Roshi',
        poder: 1000
    }

}
