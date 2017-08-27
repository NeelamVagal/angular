import { Component } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `<p>Heroes:</p>
             <ul>
              <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                 <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
             </ul>
             <hero-detail [hero]="selectedHero"></hero-detail>
             `,
})
export class HeroesComponent implements OnInit{ 
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
 }
