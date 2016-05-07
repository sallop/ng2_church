import { Component, Input } from 'angular2/core';
import { Monkey } from './monkey';

@Component({
  selector: 'monkey-edit',
  inputs: ['monkey'],
  template: `
    <label>id:</label>
    <input [(ngModel)]="monkey.id" placeholder="space monkey"/>
    {{monkey.id}}
    <br/>
    <label>team:</label>
    <input [(ngModel)]="monkey.team" placeholder="space monkey"/>
    {{monkey.team}}
    <br/>
    <label>name:</label>
    <input [(ngModel)]="monkey.name" placeholder="space monkey"/>
    {{monkey.name}}
    <br/>
    <label>christian name:</label>
    <input [(ngModel)]="monkey.christian_name" placeholder="space monkey"/>
    {{monkey.christian_name}}
    <br/>
    <label>birthday:</label>
    <input [(ngModel)]="monkey.birthday" placeholder="space monkey"/>
    {{monkey.birthday}}
    <br/>
  `
})
export class MonkeyEditComponent {
  //@Input() monkey: Monkey = new Monkey(0, 0, "name", "christian_name", "birthday");
  @Input() monkey: Monkey;
}
