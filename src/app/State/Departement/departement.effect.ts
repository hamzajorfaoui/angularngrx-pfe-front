import { map } from 'rxjs/operators';
import { DepartementService } from './../../Base/pages/departement/departement.service';
import { DepartementState } from './departement.reducer';
import { Injectable } from "@angular/core";

import { Actions , Effect , ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from '@nrwl/nx';

import * as deptActions from "./departement.action";



@Injectable() 
export class DepartementEffect{
    constructor(
        private deptService:DepartementService ,
        private actions$:Actions,
        private dataP : DataPersistence<DepartementState>
    ){}

    @Effect()
    loaddepartement$ = this.dataP.fetch(deptActions.DepartementTypes.LOAD_DEPARTEMENT,{
        run :(action:deptActions.LoadDepartement , state :DepartementState) =>{
           return  this.deptService.getdepartementstest().pipe(
                        map(
                           (departements :any[])=>    new deptActions.LoadDepartementS(departements)
                        ))
        },
        onError :(action , error) =>{return new deptActions.LoadDepartementF(error.status)}
    })
}