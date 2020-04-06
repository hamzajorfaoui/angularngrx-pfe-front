import * as fromLogin from "../LoginPage/state/login.reducer";
import * as fromDepartement from "./Departement/departement.reducer";
import * as fromDept_Fill from "./Dept_Fil/Dept_Fil.reducer";
import { ActionReducerMap } from '@ngrx/store';


export interface AppState{
    Login:fromLogin.LoginState;
    Departement:fromDepartement.DepartementState;
    Dept_Fill:fromDept_Fill.Dept_Fill_State;
}
export const reducers: ActionReducerMap<AppState> = {
    Login:fromLogin.LoginReducer,
    Departement:fromDepartement.DepartementReducer,
    Dept_Fill:fromDept_Fill.Dept_Fill_Reducer
  };