import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy()">-1</button>

  `
})

export class CounterComponent  {
  public counter: number = 10;

  increaseBy():void{
   this.counter++;
 }
  decreaseBy():void{
   this.counter--;
 }
  reset():void{
   this.counter = 10;
 }
}
