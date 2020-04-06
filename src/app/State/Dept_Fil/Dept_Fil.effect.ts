import { EtudiantService } from './../../Base/pages/etudiant/etudiant.service';
import { Dept_Fill_State } from './Dept_Fil.reducer';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";

import { Actions , Effect , ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from '@nrwl/nx';

import * as deptfill from "./Dept_Fil.action";



@Injectable() 
export class Dept_Fill_Effect{
    constructor(
        private etudS:EtudiantService,
        private actions$:Actions,
        private dataP : DataPersistence<Dept_Fill_State>
    ){}

    @Effect()
    loaddeptfill$ = this.dataP.fetch(deptfill.DeptFillTypes.LOAD_DEPT_FILL,{
        run :(action:deptfill.LOADDEPTFILL , state :Dept_Fill_State) =>{
           return  this.etudS.getdeptfiliere2().pipe(  
                        map(
                           ( Dept_Fill:any[])=>    new deptfill.LOADDEPTFILLSUCCES(Dept_Fill)
                        ))
        },
        onError :(action , error) =>{return new  deptfill.LOADDEPTFILLFail(error.statut)}
    })
}