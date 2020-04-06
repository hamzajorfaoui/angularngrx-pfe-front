import { DepartementFacade } from './../../../State/Departement/departement.facade';
import { Dept_Fillfacade } from './../../../State';
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
  constructor(private filiereS:FiliereService , private DF:DepartementFacade, private DDF:Dept_Fillfacade) { 
  this.DF.Depts$.subscribe(data=>{this.departements = data});
    this.dataSource = new CustomStore({
      key: "id",
      load: () => this.filiereS.getfiliere(),
      insert: (values) => this.filiereS.addfiliere(values)
                              .then(data=>{this.DDF.loadDept_Fill(); return data;}),
      update: (key, values) => this.filiereS.updatefiliere(key , values)
                                   .then(data=>{this.DDF.loadDept_Fill(); return data;}),
      // remove: (key) => this.profS.deleteprof(key)
  });
  }
  niveaux = [
  {
    text:"1er année",
    value:1
  },
  {
    text:"2em année",
    value:2
  },
  {
    text:"3em année",
    value:3
  }]

  ngOnInit() {
  }

}
