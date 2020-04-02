import { Action } from '@ngrx/store';

export enum DepartementTypes{
    LOAD_DEPARTEMENT = "[departement] Load Departement",
    LOAD_DEPARTEMENT_SUCCES = "[departement] Load Departement SUCCES",
    LOAD_DEPARTEMENT_FAILED = "[departement] Load Departement FAILED"
} 

export class LoadDepartement implements Action{
readonly type = DepartementTypes.LOAD_DEPARTEMENT
}
export class LoadDepartementS implements Action{
readonly type = DepartementTypes.LOAD_DEPARTEMENT_SUCCES
constructor(public payload:any[]){}
}
export class LoadDepartementF implements Action{
readonly type = DepartementTypes.LOAD_DEPARTEMENT_FAILED
constructor(public payload:any){}
}

export type action = LoadDepartement | LoadDepartementS | LoadDepartementF;