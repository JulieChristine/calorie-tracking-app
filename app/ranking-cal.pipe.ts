import {Pipe, PipeTransform} from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "rankingcal",
  pure: false   //what is this still?

})
export class RankingCalPipe implements PipeTransform {
  transform(input: Food[], desiredRankingCal) {
    var output: Food[] = [];

    if(desiredRankingCal === "High") { //we want a list with food more than 500 cal
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRankingCal === "Low"){ //we want a list with food less than 500 cal
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else { //display all the food
      return input;
    }
  }
}
