import { Login ,Userinfo } from './../login.model';
import {Action} from "@ngrx/store"

export enum LoginActionTypes{
    LOAD_Login ="[Login] LOAD Login",
    Login_SUCCES ="[Login] Login Succes",
    Login_FAIL ="[Login] Login Fail"
}

export class LoadLogin implements Action{
    readonly type=LoginActionTypes.LOAD_Login;
    constructor(public payload : Userinfo){}
}
export class LoginSucces implements Action{
    readonly type=LoginActionTypes.Login_SUCCES;
    constructor(public payload : Login){}
}
export class LoginFail implements Action{
    readonly type=LoginActionTypes.Login_FAIL;
    constructor(public payload : String){}
}

export type action = LoadLogin | LoginSucces | LoginFail;
