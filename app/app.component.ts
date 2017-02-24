import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Food tracking application</h1>
    <h5>Always have insights in what you are eating, Be conscious, stay healthy!</h5>
    <br/>
    <new-food (newFoodSender)="addFood($event)"></new-food>
    <food-list
        [childFoodList]="masterFoodList"
        (clickSender)="showDetails($event)"
    ></food-list>
    <edit-food
        [childSelectedFood]="selectedFood"
        (doneClickedSender)="finishedEditing()"
    ></edit-food>
    <snack></snack>
   </div>
  `
})

export class AppComponent {
  public masterFoodList: Food[] = [
    new Food("Omelet", "Breakfast for a champions!", 92),
    new Food("Avocado", "only had a half of it", 162),
    new Food("Mixed vegetables", "a variety of vegetables cooked together", 54),
    new Food("Burger", "extra fat burger with Ketchup", 890),
    new Food("French Fries", "crispy", 560),
    new Food("Cappuccino", "with additional sugar", 720),
  ];

  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addFood(newFoodFromChild: Food) {
    this.masterFoodList.push(newFoodFromChild);
  }
}
