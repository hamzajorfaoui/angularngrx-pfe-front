import { EtudprofileComponent } from './etudprofile/etudprofile.component';
import { SharedModuleModule } from './../../material/shared-module.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { DxTabPanelModule,DxTreeViewModule,DxDataGridModule ,DxLoadPanelModule ,DxSelectBoxModule,
        DxTextAreaModule,
        DxDateBoxModule,
        DxFormModule} from 'devextreme-angular';
import { TABetudiantComponent } from './tabetudiant/tabetudiant.component';

export const EtudiantRouting : Routes = [
  {path:'gestion' , component:EtudiantComponent , children:[
    {path:':filierename/:filiereid' , component:TABetudiantComponent},
  ]},
  {path:'profile/:etudiantid' , component:EtudprofileComponent} 
]
@NgModule({
  declarations: [ 
    EtudiantComponent,
    TABetudiantComponent,
    EtudprofileComponent
  ],
  imports: [
    DxLoadPanelModule,
    DxDataGridModule,
    SharedModuleModule,
    
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
