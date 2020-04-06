import { Injectable } from '@angular/core';
import { Store , select } from "@ngrx/store";

import * as deptfilActions from "./Dept_Fil.action";
import * as deptfilReducer from "./Dept_Fil.reducer";

@Injectable({
  providedIn: 'root'
})
export class Dept_Fillfacade {

    Dept_Fill_All$ = this.store.pipe(select(deptfilReducer.Dept_Fill_All));
    Dept_Fill_LOADED$ = this.store.pipe(select(deptfilReducer.Dept_Fill_Loaded));
    constructor(private store:Store<deptfilReducer.Dept_Fill_State>){}

    loadDept_Fill(){
       this.store.dispatch(new deptfilActions.LOADDEPTFILL);
    }
    

    
 
}