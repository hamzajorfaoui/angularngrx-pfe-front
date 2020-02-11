import { ActualiteModule } from './pages/actualité/actualite.module';
import { SharedModuleModule } from './material/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GestionprofsComponent } from './pages/Prof/gestionprofs/gestionprofs.component';
import { DxDataGridModule, DxTemplateModule ,DxTreeViewModule} from 'devextreme-angular';
import { DepartementComponent } from './pages/departement/departement/departement.component';
import { FiliereComponent } from './pages/filiere/filiere.component';
import {  EtudiantModule} from "./pages/etudiant/etudiant.module";

export const BaseRouting : Routes = [
            {path:'' , component:DashboardComponent , 
  children:[
            {path:'' , component:HomepageComponent},
            {path:'prof/gestion' , component:GestionprofsComponent},
            {path:'departement/gestion' , component:DepartementComponent},
            {path:'filiere/gestion' , component:FiliereComponent},
            {path:'etudiant' , loadChildren:"./pages/etudiant/etudiant.module#EtudiantModule"},
            {path:'actualite' ,loadChildren:"./pages/actualité/actualite.module#ActualiteModule"}      
  ] 
  } 
]

@NgModule({
  imports: [
    DxTreeViewModule,
    SharedModuleModule,
    DxTemplateModule, 
    DxDataGridModule,
    CommonModule,
    EtudiantModule,
    ActualiteModule,
    RouterModule.forChild(BaseRouting)
  ], 
  declarations: [
    DashboardComponent ,
    AsideBarComponent,
    NavBarComponent,
    HomepageComponent,
    GestionprofsComponent,
    DepartementComponent,
    FiliereComponent]
})
export class BaseModule { }
