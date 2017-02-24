import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <h3>{{ childThing }}</h3>
  `
})

export class ChildComponent {
  @Input() childThing: string;
}
