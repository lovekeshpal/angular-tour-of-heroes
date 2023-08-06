import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from 'src/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  ngOnInit() {}

  selectedHero?: Hero;
  showHero: boolean = false;

  onSelect(hero: Hero, id: number): void {
    this.selectedHero = hero;
  }
}
