import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunk",
    power: 10
  }];

  onDeleteCharacter1(index:number):void{
    // TODO: Emitir el ID del personaje
    console.log(index);
  }
  // onDeleteCharacter(index: number): void {
  //   // Eliminar el personaje en el índice dado
  //   this.characterList.splice(index, 1);
  //   console.log('Personaje eliminado en el índice:', index);
  // }
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?:string): void {
    console.log(id)
    if(!id)return;
    this.onDelete.emit(id);
  }

}

// onDeleteId = Index value: number
