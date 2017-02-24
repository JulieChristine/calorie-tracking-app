import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <select (change)= "onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="Low">Show low calories</option>
    <option value="High" selected="selected">Show high calories</option>
</select>
    <h4>List of the food consumed today: </h4>
    <div *ngFor="let currentFood of childFoodList | rankingcal:selectedRankingCal">
      <p>{{currentFood.name + " ("+ currentFood.description +") ("+ currentFood.calories + " calories)" }}</p>
      <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter ();
  public selectedRankingCal: string = "High";
  onChange(optionFromMenu) {
    this.selectedRankingCal = optionFromMenu;
    console.log(this.selectedRankingCal);
  }
  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
