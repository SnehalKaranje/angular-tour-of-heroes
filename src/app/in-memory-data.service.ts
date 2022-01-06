import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id : 1, name : "A.P.J. Abdul Kalam"},
      {id : 2, name : "Lokmanya Tilak"},
      {id : 3, name : "Swami Vivekananda"},
      {id : 4, name : "Vinayak D. Savarkar"},
      {id : 5, name : "Anandi Gopal"},
      {id : 6, name : "Savitribai Phule"},
      {id : 7, name : "Sheryl Sandberg"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

  constructor() { }

}