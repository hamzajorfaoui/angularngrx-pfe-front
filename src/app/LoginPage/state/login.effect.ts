import { LoginserviceService } from './../loginservice.service';
import { Injectable } from "@angular/core";

import { Actions , Effect , ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable , of } from "rxjs";
import { map , mergeMap , catchError } from "rxjs/operators";

import * as LoginActions from "./login.action";
import { Login ,Userinfo , User} from './../login.model';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects{
    constructor(
        private loginS :LoginserviceService,
        private actions$ : Actions,
        private route:Router
    ){}

loginreponse:Login={
    isLoggedIn:false
};
tesreploadlogin(reponse) :Action{

      this.loginreponse.isLoggedIn=true;
      this.loginreponse.token=reponse.access_token;
      localStorage.setItem('token',reponse.access_token);
      this.route.navigate(['/dashboard']);
      return new  LoginActions.LoginSucces(this.loginreponse)
    
}    
@Effect()
loadlogin$:Observable<Action> = this.actions$.pipe(
    ofType<LoginActions.LoadLogin>(
        LoginActions.LoginActionTypes.LOAD_Login
    ),
    map((action:LoginActions.LoadLogin)=>action.payload),
    mergeMap(
        (logininfo:Userinfo)=>
        this.loginS.Login(logininfo).pipe(
            map(
                (rep)=> this.tesreploadlogin(rep)
                
            ),catchError(
                err =>of(new LoginActions.LoginFail(err))
                )
        )
    )
);

@Effect()
loginuser$:Observable<Action> = this.actions$.pipe(
    ofType<LoginActions.LOGINUSER>(
        LoginActions.LoginActionTypes.LOGIN_USER
    ),
    map((action:LoginActions.LOGINUSER)=>action),
    mergeMap(
        ()=>
        this.loginS.me().pipe(
            map(
                (rep :User)=> new LoginActions.LOGINUSERSUCCES(rep)
            ),catchError(
                err =>of(new LoginActions.LOGOUT)
                )
        )
    )
);


}