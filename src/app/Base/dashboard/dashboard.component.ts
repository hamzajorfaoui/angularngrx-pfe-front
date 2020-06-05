import { DepartementFacade } from './../../State/Departement/departement.facade';
import { Observable } from 'rxjs';
import { LoginserviceService } from './../../LoginPage/loginservice.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Store , select } from "@ngrx/store";
import * as LoginActions from "../../LoginPage/state/login.action";
import * as LoginReducer from "../../LoginPage/state/login.reducer";

import {AppState} from "../../State/app-state";
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  onActivate(event , outlet) {
    outlet.scrollTop = 0;
   }
  asidebar_closed = 1;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth==900){
      this.asidebar_closed = 1;
    }
  }
  toggle_sidebar(e){
    this.asidebar_closed = e;
  }
  progressbar_value :number = 0;
  constructor(private store:Store<AppState> ,router:Router) {
    var interval; 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.progressbar_value=0;
        interval=setInterval(()=>{
          if(this.progressbar_value<90){
          this.progressbar_value = this.progressbar_value + 10;
          }
        },50);
      }
      if(event instanceof NavigationEnd) {
        setTimeout(()=>{
          clearInterval(interval);
          this.progressbar_value=0;
        },1000);
      }
    });

  }
  Loading$ :Observable<boolean>; 
  loading :boolean = true;
  ngOnInit() {
    this.store.dispatch(new LoginActions.LOGINUSER); 
    this.Loading$ = this.store.pipe(select(LoginReducer.getloading));
    this.Loading$.subscribe(data=>{
      console.log(data);
      this.loading  = data;
    })
    // this.LS.me();
  }

}
