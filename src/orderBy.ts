/// http://www.fueltravel.com/blog/migrating-from-angular-1-to-2-part-1-pipes/
import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({ name: 'orderBy' })
export class OrderBy implements PipeTransform {
  transform(input:any, args:string[]) : any {
    // transform input somehow
    return 'Sir,' + input + 'yes, sir!';
  }
}
