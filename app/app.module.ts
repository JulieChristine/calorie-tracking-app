import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { SnackListComponent } from './snack-list.component';
import { FoodListComponent } from './food-list.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { RankingCalPipe } from './ranking-cal.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SnackListComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent,
    RankingCalPipe,
  ],
  bootstrap:    [AppComponent]
})

export class AppModule { }
