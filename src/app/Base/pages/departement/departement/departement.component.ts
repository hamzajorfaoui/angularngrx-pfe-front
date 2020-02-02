import { DepartementService } from './../departement.service';
import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  dataSource:any;

  constructor(private deptS: DepartementService) { 
  this.asyncValidation = this.asyncValidation.bind(this);

    this.dataSource = new CustomStore({
      key: "id",
      load: () => this.deptS.getdepartements(),
      insert: (values) => this.deptS.adddepartement(values),
      update: (key, values) => this.deptS.updatedepartement(key , values),
      // remove: (key) => this.profS.deleteprof(key)
  });
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
