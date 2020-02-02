import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GestionprofsComponent } from './pages/Prof/gestionprofs/gestionprofs.component';
import { PortletComponent } from './material/portlet/portlet.component';
import { DxDataGridModule } from 'devextreme-angular';
import { DepartementComponent } from './pages/departement/departement/departement.component';
import { FiliereComponent } from './pages/filiere/filiere.component';

export const BaseRouting : Routes = [
            {path:'' , component:DashboardComponent , 
  children:[
            {path:'' , component:HomepageComponent},
            {path:'prof/gestion' , component:GestionprofsComponent},
            {path:'departement/gestion' , component:DepartementComponent},
            {path:'filiere/gestion' , component:FiliereComponent}

  ] 
  }
]

@NgModule({ 
  declarations: [
    DashboardComponent ,
    AsideBarComponent,
    NavBarComponent,
    HomepageComponent,
    GestionprofsComponent,
    PortletComponent,
    DepartementComponent,
    FiliereComponent],
  imports: [
    DxDataGridModule,
    CommonModule,
    RouterModule.forChild(BaseRouting)
  ]
})
export class BaseModule { }
