import { Login ,Userinfo,User } from './../login.model';
import {Action} from "@ngrx/store"

export enum LoginActionTypes{
    LOAD_Login ="[Login] LOAD Login",
    Login_SUCCES ="[Login] Login Succes",
    Login_FAIL ="[Login] Login Fail",
    IS_LOGGEDIN ="[Logged In] IS LOGGED IN",
    LOG_OUT ="[LOG OUT] LOG OUT",
    LOGIN_USER ="[LOG USER] LOGIN USER",
    LOGIN_USER_SUCCES ="[LOG USER] LOGIN USER SUCCES",
    
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
    constructor(public payload : any){}
}
export class ISLOGGEDIN implements Action{
    readonly type=LoginActionTypes.IS_LOGGEDIN;
    // constructor(public payload : Login){}
}
export class LOGOUT implements Action{
    readonly type=LoginActionTypes.LOG_OUT;
    // constructor(public payload : Login){}
}
export class LOGINUSER implements Action{
    readonly type=LoginActionTypes.LOGIN_USER;
    // constructor(public payload : Login){}
}
export class LOGINUSERSUCCES implements Action{
    readonly type=LoginActionTypes.LOGIN_USER_SUCCES;
    constructor(public payload : User){}
}

export type action = LoadLogin | LoginSucces | LoginFail |ISLOGGEDIN | LOGOUT | LOGINUSER | LOGINUSERSUCCES;
