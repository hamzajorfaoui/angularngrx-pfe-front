import { EtudiantService } from './../../etudiant/etudiant.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
 
  deptfilieres :any[];
  tabPanelIndex: number;
  loading=false;
  selectedfiliereid:number =  0;
  selectedfilieretitle="";
  constructor(private service: EtudiantService , private route:Router , private activroute: ActivatedRoute) {
    service.getdeptfiliere().subscribe(data=>{
      this.deptfilieres = data;
      if(this.activroute.firstChild){
        this.deptfilieres.forEach(element => {
          element['items'].forEach(element => {
            if(element.id == this.activroute.firstChild.snapshot.params['filiereid']+"-"){
                element.selected = true;
            }
          });
        });
      }
    },(er)=>{},()=>{
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

  changeSelection(e) {
    if(e.itemData.departement_id){
    if(this.selectedfiliereid != e.itemData.id){
      // console.log(e.itemData.id)
      // this.selectedfiliereid =e.itemData.id;
      // this.selectedfilieretitle=e.itemData.text;
      this.route.navigate(['/dashboard/filiere/matiere/gestion/'+e.itemData.text+'/'+parseInt(e.itemData.id)])
    }
    }
   
      
  }

}
