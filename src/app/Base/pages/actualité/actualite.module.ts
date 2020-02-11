import { SharedModuleModule } from './../../material/shared-module.module';
import { DxTreeViewModule, DxTabPanelModule ,DxSelectBoxModule,
  DxTextAreaModule,
  DxDateBoxModule,
  DxFormModule,DxDataGridModule } from 'devextreme-angular';
import { RouterModule , Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualiteComponent } from './actualite/actualite.component';
import { TabactualiteComponent } from './tabactualite/tabactualite.component';

export const actualiteRouting : Routes = [
  {path:'gestion' , component:ActualiteComponent , children:[
    {path:':filierename/:filiereid' , component:TabactualiteComponent},
  ]},
]
@NgModule({
  declarations: [
    ActualiteComponent,
    TabactualiteComponent
  ],
  imports: [
    DxTabPanelModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,

    SharedModuleModule,
    DxTreeViewModule,
    CommonModule,
    RouterModule.forChild(actualiteRouting)
  ]
})
export class ActualiteModule { }
