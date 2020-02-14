import { Observable } from 'rxjs';
import { LoginserviceService } from './../../LoginPage/loginservice.service';
import { Component, OnInit } from '@angular/core';
import { Store , select } from "@ngrx/store";
import * as LoginActions from "../../LoginPage/state/login.action";
import * as LoginReducer from "../../LoginPage/state/login.reducer";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor(private store:Store<LoginReducer.AppState> , private LS:LoginserviceService) { }
  Loading$ :Observable<boolean>; 
  loading :boolean = true;
  ngOnInit() {
    this.store.dispatch(new LoginActions.ISLOGGEDIN);
    this.store.dispatch(new LoginActions.LOGINUSER);

    this.Loading$ = this.store.pipe(select(LoginReducer.getloading));
    this.Loading$.subscribe(data=>{
      console.log(data);
      this.loading  = data;
    })
    // this.LS.me();
  }

}
