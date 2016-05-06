import { Component, OnInit } from 'angular2/core';
import { Monkey } from './monkey';
import { MONKEYS } from './mock-monkeys';
import { OrderBy } from './orderBy';
import * as Sort from './sort';
import { MonkeyService } from './monkey.service';
import { MonkeyEditComponent } from './monkey-edit.component'

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
  </table>
  <monkey-edit></monkey-edit>
  `,
  providers: [MonkeyService],
  directives: [MonkeyEditComponent]
  //directives: [AgGridNg2]
})
export class AppComponent implements OnInit {
  //public monkeys = MONKEYS;
  public monkeys:Monkey[];
  public sign = '+';
  public sort_type = Sort.compare_id;
  public sort_type_table = {
    "id": Sort.compare_id,
    "team": Sort.compare_team,
    "name": Sort.compare_name,
    "christian_name": Sort.compare_christian_name,
    "birthday": Sort.compare_birthday
  };

  constructor(private _monkeyService: MonkeyService){}
  getMonkeys(){
    this._monkeyService.getMonkeys().then(monkeys => this.monkeys = monkeys);
  }

  ngOnInit(){
    this.getMonkeys();
  }

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
