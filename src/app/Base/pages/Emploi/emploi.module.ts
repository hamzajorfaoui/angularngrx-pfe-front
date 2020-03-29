import { EmploiComponent } from './emploi.component';
import { EmploiexamenComponent } from './emploiexamen/emploiexamen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploidutempsComponent } from './emploidutemps/emploidutemps.component'; 
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../../material/shared-module.module';
import { DxTabPanelModule ,DxSelectBoxModule,
  DxFormModule,DxDataGridModule,  DxGalleryModule } from 'devextreme-angular';

const routes :Routes = [

  {
    path:'',
    component:EmploiComponent,
    children:[
      {
				path: '',
				redirectTo: 'emploidutemps',
				pathMatch: 'full'
			},
      {path:'emploidutemps' , component:EmploidutempsComponent},
      {path:'emploiexamens' , component:EmploiexamenComponent}, 
    ]

  },
  

]


@NgModule({
  declarations: [
    
    EmploidutempsComponent,
    EmploiexamenComponent,
    EmploiComponent
  ],
  imports: [
    DxGalleryModule,
    DxTabPanelModule,
    DxSelectBoxModule,
    DxFormModule,
    DxDataGridModule,

    SharedModuleModule,

    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmploiModule { }
