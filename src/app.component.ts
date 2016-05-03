import { Component } from 'angular2/core';
import { MONKEYS } from './mock-monkeys';
import { OrderBy } from './orderBy';
import * as Sort from './sort';

//import { AgGridNg2 } from 'ag-grid-ng2/main';

@Component({
  selector: 'my-app',
  template: `
  <h1>member of project mayhem</h1>
  <table>
    <thead>
      <td (click)="clicked('id');">id</td>
      <td (click)="clicked('team');">team</td>
      <td (click)="clicked('name');">name</td>
      <td (click)="clicked('christian_name');">christian name</td>
      <td (click)="clicked('birthday');">birthday</td>
    </thead>
   <tr *ngFor="let monkey of monkeys">
      <td>{{monkey.id}}</td>
      <td>{{monkey.team}}</td>
      <td>{{monkey.name}}</td>
      <td>{{monkey.christian_name}}</td>
      <td>{{monkey.birthday}}</td>
    </tr>
    <button (click)="clicked('id');">Click</button>
  </table>
  `,
  pipes: [OrderBy]
  //directives: [AgGridNg2]
})
export class AppComponent {
  public monkeys = MONKEYS;
  public sign = '+';
  public sort_type = Sort.compare_id;
  public sort_type_table = {
    "id": Sort.compare_id,
    "team": Sort.compare_team,
    "name": Sort.compare_name,
    "christian_name": Sort.compare_christian_name,
    "birthday": Sort.compare_birthday
  };

  public clicked(sort_type){
    this.sort_type = this.sort_type_table[sort_type];
    if (this.sign == '+'){
      this.sign = this.sign == '+' ? '-' : '+';
      this.monkeys.sort(this.sort_type);
    } else {
      this.sign = this.sign == '+' ? '-' : '+';
      this.monkeys.sort(this.sort_type).reverse();
    }
    console.log("Hello World!");
    console.log(this.sign);
  }
}
