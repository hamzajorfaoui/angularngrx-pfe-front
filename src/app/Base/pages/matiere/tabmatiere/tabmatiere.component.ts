import { ActivatedRoute } from '@angular/router';
import  CustomStore  from 'devextreme/data/custom_store';
import { MatiereService } from './../matiere.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabmatiere',
  templateUrl: './tabmatiere.component.html',
  styleUrls: ['./tabmatiere.component.scss']
})
export class TabmatiereComponent implements OnInit {
  dataSource;
  Filieretitle;
  idfiliere;
  constructor(private MS:MatiereService , private route: ActivatedRoute) { 

  }

  ngOnInit() {

     this.route.params.subscribe( params=>{
      this.idfiliere = +params['filiereid'];
      this.Filieretitle = params['filierename'];
    this.dataSource = new CustomStore({
      key:"id",
      load:()=>this.MS.getmatieres(params['filiereid']),
      insert:(values)=>this.MS.addmatieres(values , this.idfiliere),
      update:(key , values)=>this.MS.updatematieres(values ,key, this.idfiliere)
    })
  })
  }

}
