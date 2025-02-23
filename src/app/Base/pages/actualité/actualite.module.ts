import { SharedModuleModule } from './../../material/shared-module.module';
import { DxTreeViewModule, DxTabPanelModule ,DxSelectBoxModule,
  DxTextAreaModule,DxListModule,
  DxDateBoxModule,
  DxFormModule,DxDataGridModule, DxCheckBoxModule , DxGalleryModule } from 'devextreme-angular';
import { RouterModule , Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualiteComponent } from './actualite/actualite.component';
import { TabactualiteComponent } from './tabactualite/tabactualite.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DxPopupModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
export const actualiteRouting : Routes = [
  {path:'annonce/gestion' , component:ActualiteComponent , children:[
    {path:':filierename/:filiereid' , component:TabactualiteComponent},
  ]},
  {path:'gestion' , component:AnnonceComponent},
]
@NgModule({
  declarations: [
    ActualiteComponent,
    TabactualiteComponent,
    AnnonceComponent
  ],
  imports: [
    DxGalleryModule,
    DxTabPanelModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxFormModule,
    DxDataGridModule,
    DxCheckBoxModule,
    DxListModule,
    SharedModuleModule,
    DxTreeViewModule, 
    DxPopupModule,
    DxButtonModule, 
    DxTemplateModule,
    
    CommonModule,
    RouterModule.forChild(actualiteRouting)
  ]
})
export class ActualiteModule { }
