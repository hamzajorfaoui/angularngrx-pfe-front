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
 
  constructor(private store:Store<LoginReducer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoginActions.ISLOGGEDIN);
  }

}
