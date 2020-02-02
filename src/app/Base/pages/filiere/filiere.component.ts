import { DepartementService } from './../departement/departement.service';
import { Component, OnInit } from '@angular/core';
import { FiliereService } from './filiere.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.scss']
})
export class FiliereComponent implements OnInit {
  dataSource;
  departements;
  constructor(private filiereS:FiliereService , private deptS:DepartementService) { 
  this.deptS.getdepartements().then(data=>{this.departements = data;})
    this.dataSource = new CustomStore({
      key: "id",
      load: () => this.filiereS.getfiliere(),
      insert: (values) => this.filiereS.addfiliere(values),
       update: (key, values) => this.filiereS.updatefiliere(key , values),
      // remove: (key) => this.profS.deleteprof(key)
  });
  }

  ngOnInit() {
  }

}
