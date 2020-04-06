import { createSelector , createFeatureSelector} from '@ngrx/store';
import { EntityState , EntityAdapter , createEntityAdapter, Update} from "@ngrx/entity";
import * as deptfill from "./Dept_Fil.action";

export interface Dept_Fill{
    id:number,
    text:String,
    chefdep_id:number,
    items:filiere[],
    selectedItems:any[],
    created_at: any,
    updated_at: any
}
export interface filiere{
    id:number,
    text:String,
    departement_id:number,
    niveau:number,
    created_at: any,
    updated_at: any
}
export interface Dept_Fill_State extends EntityState<Dept_Fill>{
    error:any,
    loaded:boolean
}

export const Dept_Fill_adapter :EntityAdapter<Dept_Fill> = createEntityAdapter();

export const init_Dept_Fill_State = Dept_Fill_adapter.getInitialState({
    error:"",
    loaded:false
});

export function Dept_Fill_Reducer(state = init_Dept_Fill_State , action:deptfill.action){
    switch (action.type) {
        case deptfill.DeptFillTypes.LOAD_DEPT_FILL_SUCCES:
            return Dept_Fill_adapter.addAll(action.payload,{...state , loaded:true});
            break;
        case deptfill.DeptFillTypes.LOAD_DEPT_FILL_Fail:
            return {...state , error:action.payload}
            break;
    
        default:
            return state;
            break;
    }

}

const { selectIds, selectEntities, selectAll, selectTotal } = Dept_Fill_adapter.getSelectors();
export const Select_Dept_Fill = createFeatureSelector<Dept_Fill_State>('Dept_Fill');

export const Dept_Fill_All = createSelector(
    Select_Dept_Fill,
    selectAll
); 
export const Dept_Fill_Loaded= createSelector(
    Select_Dept_Fill,
    deptfilS =>deptfilS.loaded
); 
