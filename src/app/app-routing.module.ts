import { LoginComponent } from './LoginPage/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './Services/authguard.guard';
import { NOauthGuard } from './Services/noauth.guard';


const routes: Routes = [
  {path:"login", component:LoginComponent , canActivate:[NOauthGuard]},
  {path:"dashboard" , loadChildren:"./Base/base.module#BaseModule" , canActivate:[AuthguardGuard]},
  {path:"**", redirectTo:"login"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
