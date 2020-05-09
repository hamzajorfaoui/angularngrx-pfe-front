import { EtudprofileComponent } from './etudprofile/etudprofile.component';
import { SharedModuleModule } from './../../material/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DxTabPanelModule,
        DxTreeViewModule,
        DxDataGridModule ,
        DxLoadPanelModule ,
        DxSelectBoxModule,
        DxTextAreaModule,
        DxDateBoxModule,
        DxTextBoxModule,
        DxListModule,
        DxRadioGroupModule,
        DxFormModule} from 'devextreme-angular';
import { TABetudiantComponent } from './tabetudiant/tabetudiant.component';
import { SearchetudiantComponent } from './searchetudiant/searchetudiant.component';
import { AbsenceComponent } from './absence/absence.component';

export const EtudiantRouting : Routes = [
  {path:'gestion' , component:EtudiantComponent , children:[
    {path:':filierename/:filiereid' , component:TABetudiantComponent},
  ]},
  {path:'profile/:etudiantid' , component:EtudprofileComponent} ,
  {path:'chercher' , component:SearchetudiantComponent} 
]
@NgModule({
  declarations: [ 
    EtudiantComponent,
    TABetudiantComponent,
    EtudprofileComponent,
    SearchetudiantComponent,
    AbsenceComponent
  ],
  imports: [
    DxRadioGroupModule,
    DxLoadPanelModule,
    DxDataGridModule,
    SharedModuleModule,
    DxTextBoxModule,
    DxListModule,
    DxTabPanelModule,
    DxTreeViewModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,

    CommonModule,
    RouterModule.forChild(EtudiantRouting)
  ]
})
export class EtudiantModule { }
