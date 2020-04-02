import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PFE-angularngrx-front';

  loading = true;
  constructor(router:Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
      }
      if(event instanceof NavigationEnd) {
      this.loading = false;
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

}
