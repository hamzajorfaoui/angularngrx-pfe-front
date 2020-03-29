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
import { DxDataGridModule, DxTemplateModule ,DxTreeViewModule , DxTextBoxModule , DxListModule} from 'devextreme-angular';
import { DepartementComponent } from './pages/departement/departement/departement.component';
import { FiliereComponent } from './pages/filiere/filiere.component';
import {  EtudiantModule} from "./pages/etudiant/etudiant.module";
import { MatiereComponent } from './pages/matiere/matiere/matiere.component';
import { TabmatiereComponent } from './pages/matiere/tabmatiere/tabmatiere.component';
import { SearchprofComponent } from './pages/Prof/searchprof/searchprof.component';
import { EmploiModule } from "./pages/Emploi/emploi.module";

export const BaseRouting : Routes = []

@NgModule({
  imports: [
    DxListModule,
    DxTreeViewModule,
    SharedModuleModule,
    DxTemplateModule, 
    DxDataGridModule,
    DxTextBoxModule,
    CommonModule,
    EmploiModule,
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
    FiliereComponent,
    MatiereComponent,
    TabmatiereComponent,
    SearchprofComponent],
    exports:[
      DashboardComponent,
      HomepageComponent,
      GestionprofsComponent,
    DepartementComponent,
    FiliereComponent,
    MatiereComponent,
    TabmatiereComponent,
    SearchprofComponent
    ]
})
export class BaseModule { }
