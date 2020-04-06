import { Action } from '@ngrx/store';

export enum DeptFillTypes{
 LOAD_DEPT_FILL = "[DEPT_FILL] Load" ,
 LOAD_DEPT_FILL_SUCCES = "[DEPT_FILL] Load Success" ,
 LOAD_DEPT_FILL_Fail = "[DEPT_FILL] Load Fail"   
}

export class LOADDEPTFILL implements Action{
    readonly type = DeptFillTypes.LOAD_DEPT_FILL;
}
export class LOADDEPTFILLSUCCES implements Action{
    readonly type = DeptFillTypes.LOAD_DEPT_FILL_SUCCES;
    constructor(public payload){}
}
export class LOADDEPTFILLFail implements Action{
    readonly type = DeptFillTypes.LOAD_DEPT_FILL_Fail;
    constructor(public payload){}
}
export type  action = LOADDEPTFILL | LOADDEPTFILLSUCCES | LOADDEPTFILLFail;
