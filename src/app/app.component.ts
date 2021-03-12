import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent {
  prepareRoute = (outlet: RouterOutlet) => outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
}
