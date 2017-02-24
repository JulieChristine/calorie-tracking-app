import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h4>Edit Food</h4>
      <div>
        <label>Enter Food name:</label>
        <input [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
        <label>Enter Food Description:</label>
        <input [(ngModel)]="childSelectedFood.description">
      </div>
      <div>
        <label>Enter number of calories for this food item:</label>
        <input [(ngModel)]="childSelectedFood.calories">
        <button (click)="doneClicked()">Done</button>
     </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input () childSelectedFood: Food;
  @Output () doneClickedSender = new EventEmitter ();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
