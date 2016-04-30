export class Monkey {
  id: number;
  team: number;
  name: string;
  christian_name: string;
  birthday: string;

  constructor(id: number, team: number, name: string, christian_name: string, birthday: string){
    this.id = id;
    this.team = team;
    this.name = name;
    this.christian_name = christian_name;
    this.birthday = birthday;
  }
}
