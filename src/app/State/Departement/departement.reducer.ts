import * as deptActions from "./departement.action";
import {createFeatureSelector  , createSelector} from "@ngrx/store";
import { EntityState , EntityAdapter , createEntityAdapter} from "@ngrx/entity";

export interface Departement{
    id:number,
    name:String
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

