import { ActualiteService } from './../actualite.service';
import { map } from 'rxjs/operators';
import { EtudiantService } from './../../etudiant/etudiant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  constructor(private service:EtudiantService , private ACS:ActualiteService) { }
  deptfill;
  ngOnInit() {
    this.service.getdeptfiliere()
    .subscribe(
      data=>{
        for (const d of data) {
          d.selectedItems = [];
        }
        this.dataSource = data;
        
        console.log(this.deptfill)
      }
    )
  }
  selectedItems: any[] = [];
  deleteType: string = "toggle";
    
//   checkBox_valueChanged = function (e) {
//     let previousValue = e.previousValue;
//     let newValue = e.value;
//     console.log(e.value);
//     // Event handling commands go here
// }

buttonOptions: any = {
  text: "Ajouter une actualité",
  type: "success",
  useSubmitBehavior: true
}
dataSource;
idfiliereS : any[] = [];
onFormSubmit = function(e) {  
  // this.loading=true;
  // this.AnnocesF.insert(this.dataSource)
  //               .then(
  //                 data=>{
  //                   this.dataGrid.instance.refresh();                   
  //                   this.dataSource['Date Prévu'] = undefined;
  //                   this.dataSource['Date aura Lieu'] = undefined;
  //                   this.loading=false; 
  //                 }
  //               )
  this.idfiliereS= [];
  for (const data of this.dataSource) {
    for (const SI of data.selectedItems) {
      this.idfiliereS.push(SI.id);
    }
    data.selectedItems = [];
  }

  
 console.log(this.idfiliereS)
 console.log(this.dataSource.title)
 console.log(this.dataSource.contenu)
 
if(this.idfiliereS.length > 0){
this.ACS.addannoce(this.dataSource.title , this.dataSource.contenu , this.idfiliereS)
          .subscribe(
            data=>{
          console.log(data);
          this.dataSource.title = undefined
          this.dataSource.contenu = undefined
            }
          )
}
  

   
   e.preventDefault();
 }
 


}
