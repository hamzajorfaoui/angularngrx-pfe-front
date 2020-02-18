import { Login , User} from './../login.model';
import * as LoginActions from "./login.action";
import * as fromRoot from './../../State/app-state';

import {createFeatureSelector  , createSelector, State , select} from "@ngrx/store";

export interface LoginState {
    Login:Login,
    loading: boolean,
    loaded: boolean,
    error: String,
    user:User
} 
export interface AppState extends fromRoot.AppState{
    Login:LoginState;
}
export const defaultLogin :LoginState={
    Login:{
        isLoggedIn:false,
        token:""
    },
    user:null,
    loading: false,
    loaded: false,
    error: "" 
}

export function LoginReducer (state=defaultLogin, action: LoginActions.action ) :LoginState{
switch (action.type) {
    case LoginActions.LoginActionTypes.LOAD_Login:
        return{
             ...state,
              loading:true,
        }
    case LoginActions.LoginActionTypes.Login_SUCCES:
        
        return{
             ...state,
              loading:false,
              loaded:true,
              Login:action.payload
        }
    case LoginActions.LoginActionTypes.Login_FAIL:
        
            return{
                 ...state,
                  loading:false,
                  loaded:true,
                  error:action.payload
            }
     case LoginActions.LoginActionTypes.IS_LOGGEDIN:
            return{
                 ...state,
                  Login:{isLoggedIn:true,
                  token:localStorage.token},
                  loading:false,
                  loaded:false,
            }  
    case LoginActions.LoginActionTypes.LOGIN_USER:
          
            return{
                 ...state,
                 loading:true,
            }       
      case LoginActions.LoginActionTypes.LOGIN_USER_SUCCES:

            return{
                 ...state,
                  user:action.payload,
                  loading:false
            } 
    case LoginActions.LoginActionTypes.LOG_OUT:

            return defaultLogin;              

    default:
        return state;
}
}

const getloginFeatureState = createFeatureSelector<LoginState>(
    "Login"
)

export const getlogin = createSelector(
    getloginFeatureState,
    (state:LoginState)=> state.Login
)
export const geterror = createSelector(
    getloginFeatureState,
    (state:LoginState)=> state.error
)
export const getloading = createSelector(
    getloginFeatureState,
    (state:LoginState)=> state.loading
)
export const getloaded = createSelector(
    getloginFeatureState,
    (state:LoginState)=> state.loaded
)
export const getuser= createSelector( 
    getloginFeatureState,
    (state:LoginState)=> state.user
)
