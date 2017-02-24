//here we are defining what properties the Food Object has -> in this case 3 properties: a name, a description and a number of calories

export class Food {
  constructor(public name: string, public description: string, public calories: number) {   }
}
