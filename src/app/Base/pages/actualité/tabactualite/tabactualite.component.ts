import  CustomStore  from 'devextreme/data/custom_store';
import { ActivatedRoute } from '@angular/router';
import { ActualiteService } from './../actualite.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxFormComponent } from "devextreme-angular";

@Component({
  selector: 'app-tabactualite',
  templateUrl: './tabactualite.component.html',
  styleUrls: ['./tabactualite.component.scss']
})
export class TabactualiteComponent implements OnInit {
  AnnocesF :CustomStore;
  constructor(private actualiteS:ActualiteService , private AR:ActivatedRoute) {
   
   }
  dataSource;
  proflist;
  matierelist;
  typelist;
  filiereid;
  loading = false;
  loadingfull = false;
  
  ngOnInit() {
    // console.log(  Date('Sun Feb 09 2020 21:17:00 GMT+0100 (UTC+01:00)'))

   

    this.AR.params.subscribe(data=>{
      this.loadingfull = true;
    this.actualiteS.getdata(data['filiereid']).subscribe(
      data=>{
       
        this.dataSource = data;
        this.proflist = data['profs'];
        this.matierelist = data['matieres'];
        this.typelist = data['types'];
        this.loadingfull = false;
      }
    )
    this.filiereid = data['filiereid'];
    // this.actualiteS.getannoncebyF(data['filiereid']).subscribe(
    //   (data)=>{this.AnnocesF = data['data'];}
    // )
    this.AnnocesF = new CustomStore({
      key:"id",
      load: () => this.actualiteS.getannoncebyF(data['filiereid']),
      insert :(values) => this.actualiteS.addannonce(values,this.filiereid ),
      remove:(key)=>this.actualiteS.removeannoce(key)
      })
    })
    // this.AnnocesF.insert(  this.dataSource)
  
  }
  
  buttonOptions: any = {
    text: "Ajouter une actualité",
    type: "success",
    useSubmitBehavior: true
}
Professeur;

@ViewChild('targetDataGrid', { static: false }) dataGrid: DxDataGridComponent;
@ViewChild('formtarget', { static: false }) formtarget: DxFormComponent;
onFormSubmit = (e) =>{  
 this.loading=true;
 this.AnnocesF.insert(this.dataSource)
               .then(
                 data=>{
                  this.dataGrid.instance.refresh();                   
                  //  this.dataSource['Date Prévu'] = undefined;
                  //  this.dataSource['Date aura Lieu'] = undefined;
                  this.formtarget.instance.resetValues();
                  this.loading=false; 
                 }
               ).catch(e=>{this.loading=false;throw e;})

  
  e.preventDefault();
}


}
