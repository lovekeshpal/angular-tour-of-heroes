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

  selectedHero: Hero = { id: 0, name: 'none' };
  showHero: boolean = false;

  onSelect(hero: Hero, id: number): void {
    if (id === this.selectedHero?.id) {
      this.selectedHero = { id: 0, name: 'none' };
      this.showHero = false;
    } else {
      this.selectedHero = hero;
      this.showHero = true;
    }
  }
}
