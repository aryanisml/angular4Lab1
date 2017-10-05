import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [HeroService]
})

export class HeroMainComponent implements OnInit {
constructor(private heroService:HeroService){
}

heros:Hero[];
selectedHero:Hero;

ngOnInit():void{
  this.getHero();
}

  title = 'Tour of heroes';
  //hero='Wisdom';
  // hero: Hero = {
  //   id: 1,
  //   name: 'swapnil'
  // };
  

getHero():void{
//this.heros = this.heroService.getHero();
this.heroService.getHero().then(swapresponse=>this.heros=swapresponse);
}

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

}
// const HEROS: Hero[] = [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' },
//   { id: 3, name: 'C' }
// ];

