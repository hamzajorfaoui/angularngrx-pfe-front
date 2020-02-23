import { EtudiantService } from './../etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  deptfilieres :any[];
  tabPanelIndex: number;
  loading=false;
  selectedfiliereid:number =  0;
  selectedfilieretitle="";
  
  changeSelection(e) {
    if(e.itemData.departement_id){
    if(this.selectedfiliereid != e.itemData.id){
      // console.log(e.itemData.id)
      // this.selectedfiliereid =e.itemData.id;
      // this.selectedfilieretitle=e.itemData.text;
      this.route.navigate(['/dashboard/etudiant/gestion/'+e.itemData.text+'/'+parseInt(e.itemData.id)])
    }
    }
   
      
  }

  constructor(private service: EtudiantService , private route:Router , private activroute: ActivatedRoute) {
    this.loading = true;
    service.getdeptfiliere().subscribe(data=>{
      this.deptfilieres = data;
      console.log(this.deptfilieres)
    },(er)=>{},()=>{this.loading = false;
 
      if(this.activroute.firstChild){
        this.deptfilieres.forEach(element => {
          element['items'].forEach(element => {
            if(element.id == this.activroute.firstChild.snapshot.params['filiereid']+"-"){
                element.selected = true;
            }
          });
        });
      }
    })
   
  }

  ngOnInit() {

    this.route.events.subscribe(event=>{
      if (event instanceof NavigationEnd) {
       if(this.route.url == '/dashboard/etudiant/gestion'){
        this.deptfilieres.forEach(element => {
          element['items'].forEach(element => {
                element.selected = false;
                this.selectedfiliereid = 0;
          });
        });
       }
      }
    })
 
  }


}
