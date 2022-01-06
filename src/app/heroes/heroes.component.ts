import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero : Hero | undefined;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }
}