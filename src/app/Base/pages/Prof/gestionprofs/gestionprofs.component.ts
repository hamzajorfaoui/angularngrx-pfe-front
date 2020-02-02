import { ProfService, Prof } from './../prof.service';
import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-gestionprofs',
  templateUrl: './gestionprofs.component.html',
  styleUrls: ['./gestionprofs.component.scss']
})

export class GestionprofsComponent implements OnInit {

  constructor(private profS:ProfService) {
    // this.refreshMode = "reshape";
    // this.refreshModes = ["full", "reshape", "repaint"];
    this.dataSource = new CustomStore({
      key: "id",
      load: () => this.profS.getprofs(),
      insert: (values) => this.profS.addprofs(values),
      update: (key, values) => this.profS.updateprofs(key , values),
      remove: (key) => this.profS.deleteprof(key)
  });
   } 
  dataSource: any;
  profData :any;
  refreshMode: string;
  idupdate = -1;
  ngOnInit() {
    this.profS.emailexist("taha@jj.com").subscribe(
      (data)=>{
        console.log(data['exist'])
      }
    )
    this.asyncValidation = this.asyncValidation.bind(this);
    this.asyncValidationupdate = this.asyncValidationupdate.bind(this);
    
  }
  asyncValidation(params) {
    console.log(params)
    return new Promise((resolve) => {
      this.profS.emailexist(params.value)
      .subscribe(
        (data)=>{
            resolve(!data['exist']);
            console.log(data['exist']);
          }
      )  
   });
}
asyncValidationupdate(params) {
  return new Promise((resolve) => {
    this.profS.emailexistupdate(params.value , this.idupdate)
    .subscribe(
      (data)=>{
          resolve(!data['exist']);
          console.log(data['exist']);
        }
    )  
 });
}
itemVisible = true;  
onInitNewRow(e: any) {  
    this.itemVisible = true;  
}  
onEditingStart(e: any) {  
    this.idupdate = e.key;
    this.itemVisible = false;  
}

}
