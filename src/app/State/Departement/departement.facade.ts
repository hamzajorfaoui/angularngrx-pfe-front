import { Injectable } from '@angular/core';
import { Store , select } from "@ngrx/store";

import * as deptActions from "./departement.action";
import * as deptReducer from "./departement.reducer";

@Injectable({
  providedIn: 'root'
})
export class DepartementFacade {

    constructor(private store:Store<deptReducer.DepartementState>){}

    loadDepts(){
       this.store.dispatch(new deptActions.LoadDepartement);
    }
    AddDepts(departement){
      this.store.dispatch(new deptActions.ADDDepartement(departement));
    }
    Updatedept(departement){
      this.store.dispatch(new deptActions.UPDATEDepartement(departement));
    }

    Depts$ =this.store.pipe(select(deptReducer.departements));
    DeptLoaded$ =this.store.pipe(select(deptReducer.DepartementLoaded));
}