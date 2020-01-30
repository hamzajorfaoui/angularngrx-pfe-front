import { LoginComponent } from './LoginPage/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Base/dashboard/dashboard.component';
import { HomepageComponent } from './Base/pages/homepage/homepage.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard" , component:DashboardComponent , children:[
    {path:"home" , component:HomepageComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
