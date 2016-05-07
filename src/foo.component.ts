import { Component, Input } from 'angular2/core';
import { Monkey } from './monkey';

@Component({
  selector: 'foo',
  template: `
  <td>
    {{hero.name}}
  </td>
  `
})
export class FooComponent {
  @Input() public hero: Monkey;
}
