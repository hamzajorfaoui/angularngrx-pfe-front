import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"; 

import { EffectsModule,Actions } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { LoginReducer } from "./state/login.reducer";
import { LoginEffects } from "./state/login.effect";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature("Login", LoginReducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }
