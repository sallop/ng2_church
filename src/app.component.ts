import { Component } from 'angular2/core';
import { MONKEYS } from './mock-monkeys';
import { OrderBy } from './orderBy';

@Component({
  selector: 'my-app',
  template: `
  <h1>member of project mayhem</h1>
  <ul>
    <li *ngFor="let monkey of monkeys">{{monkey|orderBy}}</li>
  </ul>
  `,
  pipes: [OrderBy]
})
export class AppComponent {
  //public monkeys = MONKEYS;
  public monkeys = [
    "Bob",
    "Edward Norton",
    "Tyler Durden"
  ];
}
