import { Component } from 'angular2/core';
import { MONKEYS } from './mock-monkeys';
import { OrderBy } from './orderBy';
//import { AgGridNg2 } from 'ag-grid-ng2/main';

@Component({
  selector: 'my-app',
  template: `
  <h1>member of project mayhem</h1>
  <ul>
    <!--li *ngFor="let monkey of monkeys">{{monkey | orderBy}}</li-->
    <li *ngFor="let monkey of monkeys | orderBy : '+'">{{ monkey.name }}</li>
    <li *ngFor="let monkey of monkeys | orderBy : '-'">{{ monkey.name }}</li>
  </ul>
  <table>
    <tr *ngFor="let monkey of monkeys | orderBy : '+'">
      <td>{{monkey.id}}</td>
      <td>{{monkey.team}}</td>
      <td>{{monkey.name}}</td>
      <td>{{monkey.christian_name}}</td>
      <td>{{monkey.birthday}}</td>
    </tr>
    <tr *ngFor="let monkey of monkeys | orderBy : '-'">
      <td>{{monkey.id}}</td>
      <td>{{monkey.team}}</td>
      <td>{{monkey.name}}</td>
      <td>{{monkey.christian_name}}</td>
      <td>{{monkey.birthday}}</td>
    </tr>

  </table>
  `,
  pipes: [OrderBy]
  //directives: [AgGridNg2]
})
export class AppComponent {
  public monkeys = MONKEYS;
}
