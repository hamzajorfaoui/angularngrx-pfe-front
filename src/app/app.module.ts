import { Dept_FillResolver } from './Resolves/Dept_Fill.resolve';
import { SharedModuleModule } from './Base/material/shared-module.module';
import { DepartementResolver } from './Resolves/departement.resolve';

import { DataPersistence } from '@nrwl/nx';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { ErrorInterceptorService } from './Services/error-interceptor.service';
import { LoginModule } from './LoginPage/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BaseModule } from './Base/base.module';
import { StateModule } from './State/state.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BaseModule, 
    StateModule,
    HttpClientModule,
    SharedModuleModule
  ],
  providers: [
    Dept_FillResolver,
    DepartementResolver,
  {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptorService,multi: true}, 
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
   DataPersistence],
  bootstrap: [AppComponent]
})
export class AppModule { }
