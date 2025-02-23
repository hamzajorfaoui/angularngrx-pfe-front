import { Dept_Fill_Effect } from './Dept_Fil/Dept_Fil.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule} from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from '@ngrx/effects';

import {reducers} from "./app-state";

@NgModule({
  declarations: [], 
  imports: [
    CommonModule, 
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([Dept_Fill_Effect]),
    StoreDevtoolsModule.instrument(),
  ]
}) 
export class StateModule { }
 