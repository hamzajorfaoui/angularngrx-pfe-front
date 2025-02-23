import { EtudiantService } from './../../etudiant/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  
  deptfilieres
  loading;
  constructor( private service:EtudiantService , private activroute:ActivatedRoute  , private route:Router) { 
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
    },(er)=>{},()=>{this.loading = false;
    })
  }

  ngOnInit() {
    this.route.events.subscribe(event=>{
      if (event instanceof NavigationEnd) {
       if(this.route.url == '/dashboard/actualite/annonce/gestion'){
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

  selectedfiliereid = 0;
  selectedfilieretitle = ""
  changeSelection(e) {
    if(e.itemData.departement_id){
    if(this.selectedfiliereid != e.itemData.id){
      // console.log(e.itemData.id)
      this.selectedfiliereid =e.itemData.id;
      this.selectedfilieretitle=e.itemData.text;
      this.route.navigate(['/dashboard/actualite/annonce/gestion/'+e.itemData.text+'/'+parseInt(e.itemData.id)])
    }
    } 
  }

}
