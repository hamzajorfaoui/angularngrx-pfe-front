import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store , select } from "@ngrx/store";
import * as LoginActions from "../state/login.action";
import * as LoginReducer from "../state/login.reducer";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<LoginReducer.AppState>) { }
  Error$ :Observable<String>
  Loading$ :Observable<boolean>
  
  ngOnInit() {
   
    this.Error$ = this.store.pipe(select(LoginReducer.geterror));
    this.Loading$ = this.store.pipe(select(LoginReducer.getloading));
    this.Loading$.subscribe(data=>{
      console.log(data)
    })
  }

  adminloginform = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required] ),
    passwoard:new FormControl('',Validators.required)
  })
  onSubmit(){
    if(this.adminloginform.valid){
      this.store.dispatch(new LoginActions.LoadLogin(this.adminloginform.value));
    }else{
      console.log("fail")
    }
  }
  get email(){
    return this.adminloginform.get('email');
  }
  get passwoard(){
    return  this.adminloginform.get('passwoard');
  }

}
