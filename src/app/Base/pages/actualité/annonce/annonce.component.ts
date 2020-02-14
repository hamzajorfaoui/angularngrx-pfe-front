import { DxDataGridComponent } from 'devextreme-angular';
import  CustomStore  from 'devextreme/data/custom_store';
import { ActualiteService } from './../actualite.service';
import { map } from 'rxjs/operators';
import { EtudiantService } from './../../etudiant/etudiant.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  constructor(private service:EtudiantService , private ACS:ActualiteService) { }
  Actualites;
  ngOnInit() {
    this.Actualites = new CustomStore({
      key:'id',
      load:()=>this.ACS.getactualites(),
      update:(key , values)=> this.ACS.updateactualite(key , values),
      remove:(key) =>this.ACS.removeactualite(key)
    })
    this.service.getdeptfiliere()
    .subscribe(
      data=>{
        for (const d of data) {
          d.selectedItems = [];
        }
        this.dataSource = data;
      }
    )
  }

  selectedItems: any[] = [];
  deleteType: string = "toggle";
  buttonOptions: any = {
    text: "Ajouter une actualité",
    type: "success",
    useSubmitBehavior: true
  }
  dataSource;
  idfiliereS : any[] = [];
  @ViewChild('targetDataGrid', { static: false }) dataGrid: DxDataGridComponent;

onFormSubmit = function(e) {  
  this.idfiliereS= [];

  new Promise(
    (resolve, reject) =>{
    for (const data of this.dataSource) {
    for (const SI of data.selectedItems) {
      this.idfiliereS.push(SI.id);
    }
    data.selectedItems = [];
    resolve();
  }})
  .then(
    ()=>{
      console.log("ok")
  if(this.idfiliereS.length > 0){
  this.ACS.addactualite(this.dataSource.title , this.dataSource.contenu , this.idfiliereS)
            .subscribe(
              data=>{
            this.dataGrid.instance.refresh();       
            this.dataSource.title = undefined
            this.dataSource.contenu = undefined
              }
            )
  }else{


  }
    })
   e.preventDefault();
 }
 


}
