import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';



@NgModule({ 
  declarations: [
    DashboardComponent ,
    AsideBarComponent,
    NavBarComponent,
    HomepageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BaseModule { }
