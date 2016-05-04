import { Monkey } from './monkey';
import { MONKEYS } from './mock-monkeys';
import { Injectable } from 'angular2/core';

@Injectable()
export class MonkeyService {
  getMonkeys(){
    return Promise.resolve(MONKEYS);
  }
  // See the "Take it slow" appendix
  getMokeysSlowly(){
    return new Promise<Monkey[]>( resolve => setTimeout(()=>resolve(MONKEYS), 2000));
  }
}
