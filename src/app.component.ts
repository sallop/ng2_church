import { Component, OnInit } from 'angular2/core';
import { Monkey } from './monkey';
import { MONKEYS } from './mock-monkeys';
import { OrderBy } from './orderBy';
import * as Sort from './sort';
import { MonkeyService } from './monkey.service';
import { MonkeyEditComponent } from './monkey-edit.component';
import { FooComponent } from './foo.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>member of project mayhem</h1>
  <table>
    <thead>
      <td (click)="sorted('id');">id</td>
      <td (click)="sorted('team');">team</td>
      <td (click)="sorted('name');">name</td>
      <td (click)="sorted('christian_name');">christian name</td>
      <td (click)="sorted('birthday');">birthday</td>
    </thead>
    <tr *ngFor="let monkey of monkeys" (click)="setEdit(monkey)">
      <td>{{monkey.id}}</td>
      <td>{{monkey.team}}</td>
      <td>{{monkey.name}}</td>
      <td>{{monkey.christian_name}}</td>
      <td>{{monkey.birthday}}</td>
    </tr>
  </table>
  <monkey-edit [monkey]="selectedMonkey"></monkey-edit>
  `,
  providers: [MonkeyService],
  directives: [MonkeyEditComponent]
})
export class AppComponent implements OnInit {
  //public monkeys = MONKEYS;
  public selectedMonkey:Monkey = new Monkey(0,0,"monkey","monkey","1980/01/01");
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
    // console.log( this.monkeys );
    // this.selectedMonkey = this.monkeys[0]; it doesn't load.
  }

  setEdit(monkey){
    console.log(monkey);
    this.selectedMonkey = monkey;
  }

  public sorted(sort_type){
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
