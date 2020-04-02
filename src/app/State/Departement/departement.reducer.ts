import * as deptActions from "./departement.action";
import {createFeatureSelector  , createSelector} from "@ngrx/store";
import { EntityState , EntityAdapter , createEntityAdapter, Update} from "@ngrx/entity";

export interface Departement{
    id:number,
    name:String,
    created_at: any,
    updated_at: any

}

export interface DepartementState extends EntityState<Departement>{
    error:String,
    loaded:boolean
}
export const Departementadapter :EntityAdapter<Departement> = createEntityAdapter();

export const deptInitState :DepartementState = Departementadapter.getInitialState({
        error:"", 
        loaded:false
    });

export function DepartementReducer (state = deptInitState , action :deptActions.action){
    switch (action.type) {
        case deptActions.DepartementTypes.LOAD_DEPARTEMENT_SUCCES:
            console.log(action.payload);
            return Departementadapter.addAll(action.payload , {
                ...state,
                error:"",
                loaded:true
            })
            break;
        case deptActions.DepartementTypes.LOAD_DEPARTEMENT_FAILED:
            console.log(action.payload);
            return {
                ...state,
                error:action.payload,
                loaded:true
            }
            break;
        case deptActions.DepartementTypes.ADD_DEPARTEMENT:
            console.log(action.payload);
            return Departementadapter.addOne(action.payload,{...state})
            break;
        case deptActions.DepartementTypes.UPDATE_DEPARTEMENT:
            const editSubmission: Update<Departement> = {
                id: action.payload .id,
                changes: {name:action.payload.name , updated_at:action.payload.updated_at}
              };
            return Departementadapter.updateOne(editSubmission,state )
            break;
        default:
            return state
            break;
    }
}

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } = Departementadapter.getSelectors();

export const selectDepartementState = createFeatureSelector<DepartementState>('Departement');
//select depts
export const departements = createSelector(
    selectDepartementState,
    selectAll
);
export const DepartementLoaded = createSelector(
    selectDepartementState,
    Deptstate=>Deptstate.loaded
)

