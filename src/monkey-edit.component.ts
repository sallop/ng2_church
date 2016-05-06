import { Component, Input } from 'angular2/core';
import { Monkey } from './monkey';

@Component({
  selector: 'monkey-edit',
  template: `
    <label>name:</label>
    <input [(ngModel)]="monkey.name" placeholder="space monkey"/>
  {{monkey.name}}
  `
})
export class MonkeyEditComponent {
  @Input() monkey: Monkey = new Monkey(0, 0, "monkey", "space monkey", "1942/04/02");
}
