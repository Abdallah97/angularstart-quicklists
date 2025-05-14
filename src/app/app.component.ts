import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
     <router-outlet />`,
  imports: [RouterOutlet]
})
    export class AppComponent {
      title = 'my-angular-app';
  constructor() {
    console.log('AppComponent initialized');
  }
}