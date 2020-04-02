import { DxDataGridComponent } from 'devextreme-angular';

import { tap, take, takeLast, map } from 'rxjs/operators';
import { DepartementFacade } from './../../../../State/Departement/departement.facade';
import { DepartementService } from './../departement.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  dataSource:any;
  @ViewChild('datagrid', { static: false }) dataGrid: DxDataGridComponent;

  constructor(private deptS: DepartementService , private DF:DepartementFacade) { 
  this.asyncValidation = this.asyncValidation.bind(this);
    // this.loaddeptt();
    this.dataSource = new CustomStore({
      key: "id",
      loadMode: "processed",
      load: () => this.DF.Depts$.pipe(take(1))
                  .toPromise()
                  .then(d=>{return d})
                  .catch(e=>{throw e}),
      insert: (values) => this.deptS.adddepartement(values)
                              .then(data=>this.DF.AddDepts(data)),
      update: (key, values) => this.deptS.updatedepartement(key , values)
                                   .then(data=>this.DF.Updatedept(data)),
      // remove: (key) => this.profS.deleteprof(key)
  });
  }

  Data;
  loaddeptt(){

  this.DF.Depts$
  .subscribe(
  data=>{
    // console.log(data);
    if(data.length > 0){
    this.Data = new Promise((res, rej)=>{res(data)});
    this.dataGrid.instance.refresh();
    return this.DF.Depts$.pipe(take(1))
                  .toPromise()
                  .then(d=>{return d})
                  .catch(e=>{throw e});
    }else{}
  },
  error=>{this.Data = new Promise((res, rej)=>{throw error.statut});})
  return this.Data;

  // .subscribe(data=>{this.Data =  data;})
  // .toPromise()
  // .then((data) => {
  //   console.log(data);
  //   this.Data =  data;
  //   }).catch(e => {
  //     throw e && e.error && e.error.Message;
  // });
  }

  ngOnInit() {
  }
  asyncValidation(params) {
    console.log(params)
    return new Promise((resolve) => {
      this.deptS.nameexist(params.value)
      .subscribe(
        (data)=>{
            resolve(!data['exist']);
            console.log(data['exist']);
          }
      )  
   });
}

}
