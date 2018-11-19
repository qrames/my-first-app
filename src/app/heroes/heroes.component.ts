import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Heroito'
  };
  heroita: Hero = {
    id: 2,
    name: 'Heroita'
  };
  constructor() { }

  ngOnInit() {
  }

}
