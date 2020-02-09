import CustomStore from 'devextreme/data/custom_store';
import { EtudiantService } from './../etudiant.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabetudiant',
  templateUrl: './tabetudiant.component.html',
  styleUrls: ['./tabetudiant.component.scss']
})
export class TABetudiantComponent implements OnInit , OnChanges{
 idfiliere = 0;
 Filieretitle = "";
 dataSource;
 itemVisible = true;
 private sub;
  constructor(private etudiantS:EtudiantService , private route: ActivatedRoute) { 
    this.asyncValidationcin = this.asyncValidationcin.bind(this);
    this.asyncValidationcne = this.asyncValidationcne.bind(this);
  }

  ngOnInit() {   

    this.sub = this.route.params.subscribe( params=>{
      this.idfiliere = +params['filiereid'];
      this.Filieretitle = params['filierename'];

      console.log(this.idfiliere)
      if(this.idfiliere != 0 ){
        //  console.log(this.etudiantS.getetudiantbyfiliere(this.idfiliere)) 
    
        this.dataSource = new CustomStore({
          key: "id",
          load: () => this.etudiantS.getetudiantbyfiliere(this.idfiliere),
          insert: (values) => this.etudiantS.addetudiant(values , this.idfiliere),
           update: (key, values) => this.etudiantS.updateetudiant(key , values),
          // remove: (key) => this.profS.deleteprof(key)
      });
        }

    }),(er)=>{},()=>{}
  
  }
  ngOnChanges() {
  //   if(this.idfiliere != 0 ){
  //   //  console.log(this.etudiantS.getetudiantbyfiliere(this.idfiliere)) 

  //   this.dataSource = new CustomStore({
  //     key: "id",
  //     load: () => this.etudiantS.getetudiantbyfiliere(this.idfiliere),
  //     insert: (values) => this.etudiantS.addetudiant(values , this.idfiliere),
  //      update: (key, values) => this.etudiantS.updateetudiant(key , values),
  //     // remove: (key) => this.profS.deleteprof(key)
  // });
  //   }
  }
  asyncValidationcin(params){
    return new Promise((resolve) => {
      this.etudiantS.cinexist(params.value)
      .subscribe(
        (data)=>{
            resolve(!data['exist']);
            console.log(data['exist']);
          }
      )  
   });
  }
  asyncValidationcne(params){
    return new Promise((resolve) => {
      this.etudiantS.cneexist(params.value)
      .subscribe(
        (data)=>{
            resolve(!data['exist']);
            console.log(data['exist']);
          }
      )  
   });
  }
  onInitNewRow(e: any) {  
      this.itemVisible = true;  
  }  
  onEditingStart(e: any) {  
      // this.idupdate = e.key;
      this.itemVisible = false;  
  }

}
