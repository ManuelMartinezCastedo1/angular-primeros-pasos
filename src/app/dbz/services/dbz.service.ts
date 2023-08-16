import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  },{
    id: uuid(),
    name: "Goku",
    power: 9500
  },{
    id: uuid(),
    name: "Veggetta",
    power: 7500
  }];

  addCharacter( character: Character ): void {

    const newCharacter: Character = {id:uuid(), ...character}
    this.characters.push(newCharacter);
  }
  onDeleteCharacterById(id: string ){
    this.characters = this.characters.filter(character => character.id !== id);
  }


  dni: string = "";
  resultado: string = "";

  constructor() { }

  validarDNI() {
    const numero = parseInt(this.dni.substr(0, this.dni.length - 1), 10);
    const letra = this.dni.charAt(this.dni.length - 1);
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (this.dni.length !== 9 || letras.charAt(numero % 23) !== letra.toUpperCase()) {
      this.resultado = 'DNI no válido';
    } else {
      this.resultado = 'DNI válido';
    }
  }

}
