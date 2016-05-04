import {Monkey} from './monkey';
import {MONKEYS} from './mock-monkeys';

console.log("This is sort.ts");

//var unordered = MONKEYS;
var unordered = [
  new Monkey(1, 4, "Marla", "Maria", "1984/03/11"),
  new Monkey(2, 8, "lobart", "bitch tits", "1984/07/11"),
  new Monkey(3, 1, "Edward Norton", "Tyler Durden", "1984/09/11"),
  new Monkey(4, 3, "Officer", "dildo", "1984/09/11"),
  new Monkey(5, 2, "Bob", "bitch tits", "1984/07/11"),
];

//const ordered = [];

//console.log(unordered);
//console.log(JSON.stringify(unordered));

//constructor(id: number, team: number, name: string, christian_name: string, birthday: string){
export function compare_id(a, b){
  if (a.id < b.id) return -1;
  else if (a.id > b.id) return 1;
  else return 0;
}

export function compare_team(a, b){
  if (a.team < b.team) return -1;
  else if (a.team > b.team) return 1;
  else return 0;
}

export function compare_name(a, b){
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  else return 0;
}

export function compare_christian_name(a, b){
  if (a.christian_name < b.christian_name) return -1;
  else if (a.christian_name > b.christian_name) return 1;
  else return 0;
}

export function compare_birthday(a, b){
  if (a.birthday < b.birthday) return -1;
  else if (a.birthday > b.birthday) return 1;
  else return 0;
}

export function compare_meta(a, b, attr){
  if (a.attr < b.attr) return -1;
  else if (a.attr> b.attr) return 1;
  else return 0;
}


//unordered.sort(compare);
//ordered = unordered.sort(compare_team).reverse();
//console.log(JSON.stringify(ordered));
//console.log("unordered");
//console.log(unordered);
//console.log("ordered");
//console.log(ordered);
