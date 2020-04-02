import * as fromLogin from "../LoginPage/state/login.reducer";
import * as fromDepartement from "./Departement/departement.reducer";
import { ActionReducerMap } from '@ngrx/store';


export interface AppState{
    Login:fromLogin.LoginState;
    Departement:fromDepartement.DepartementState;
}
export const reducers: ActionReducerMap<AppState> = {
    Login:fromLogin.LoginReducer,
    Departement:fromDepartement.DepartementReducer
  };