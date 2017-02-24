import { Component } from '@angular/core';

@Component({
  selector: 'snack',
  template: `
    <h4>Conscious snack suggestions:</h4>
    <div *ngFor="let currentSnack of favoriteSnack">
      <p>{{currentSnack}}</p>
    </div>
  `
})

export class SnackListComponent {
  favoriteSnack: string[] = ["Salad", "Crackers", "Miso Soup"];
}
