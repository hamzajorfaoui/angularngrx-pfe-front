import { PortletComponent } from './portlet/portlet.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { DxLoadPanelModule } from 'devextreme-angular';



@NgModule({
  declarations: [PortletComponent, LoadingpageComponent],
  imports: [
    CommonModule,
    DxLoadPanelModule
  ],
  exports:[PortletComponent, LoadingpageComponent]
})
export class SharedModuleModule { }
