import { ActivatedRoute } from '@angular/router';
import { ActualiteService } from './../actualite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabactualite',
  templateUrl: './tabactualite.component.html',
  styleUrls: ['./tabactualite.component.scss']
})
export class TabactualiteComponent implements OnInit {
  AnnocesF;
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
      }
    )
    this.filiereid = data['filiereid'];
    this.actualiteS.getannoncebyF().subscribe(
      (data)=>{this.AnnocesF = data['data']; this.loadingfull = false}
    )
    })
  
  }
  
  buttonOptions: any = {
    text: "Ajouter une actualité",
    type: "success",
    useSubmitBehavior: true
}
Professeur;

onFormSubmit = function(e) {  
 this.loading=true;
  this.actualiteS.addannonce(this.dataSource,this.filiereid ).subscribe(data=>{
    console.log(data);
    this.loading=false;
    this.dataSource['Date Prévu'] = undefined;
    this.dataSource['Date aura Lieu'] = undefined;
    this.AnnocesF.push(data.data[0])
  })

  e.preventDefault();
}


}
