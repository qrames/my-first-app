import { Component } from '@angular/core';

import { HeroesComponent } from 'heroes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-first-app';
}
