import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
    <h4>Add food to your list</h4>
    <div>
      <label>Enter the name: </label>
      <input #newName>
    </div>
    <div>
      <label>Enter a description: </label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter the number of calories: </label>
      <input #newCalories>
      <button (click)="addClicked(newName.value, newDescription.value, newCalories.value);
      newName.value='';
      newDescription.value='';
      newCalories.value='';">Add</button>
    </div>

  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, description: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, description, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
