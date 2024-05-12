import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbx.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 9000
        },
        {
            nombre: 'Gohan',
            poder: 12000
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonaje(nuevo: Personaje) {
        this._personajes.push(nuevo);
    }
}