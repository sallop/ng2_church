import { Component } from 'angular2/core';
import { MONKEYS } from './mock-monkeys';
import { OrderBy } from './orderBy';
//import { AgGridNg2 } from 'ag-grid-ng2/main';

@Component({
  selector: 'my-app',
  template: `
  <h1>member of project mayhem</h1>
  <table>
    <thead>
      <td (click)="hello('id');">id</td>
      <td (click)="hello('team');">team</td>
      <td (click)="hello('name');">name</td>
      <td (click)="hello('christian name');">christian name</td>
      <td (click)="hello('birthday');">birthday</td>
    </thead>
   <!--tr *ngFor="let monkey of monkeys | orderBy : '-team' : sign"-->
   <tr *ngFor="let monkey of monkeys | orderBy : sign">
      <td>{{monkey.id}}</td>
      <td>{{monkey.team}}</td>
      <td>{{monkey.name}}</td>
      <td>{{monkey.christian_name}}</td>
      <td>{{monkey.birthday}}</td>
    </tr>
    <button (click)="clicked();">Click</button>
  </table>
  `,
  pipes: [OrderBy]
  //directives: [AgGridNg2]
})
export class AppComponent {
  public monkeys = MONKEYS;
  public sign = '+';
  public hello( message ){
    console.log( message );
  }
  public clicked(){
    this.sign = this.sign == '+' ? '-' : '+';
    console.log("Hello World!");
    console.log(this.sign);
  }

}
