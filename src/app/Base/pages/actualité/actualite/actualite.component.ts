import { EtudiantService } from './../../etudiant/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  
  deptfilieres
  loading;
  constructor( private service:EtudiantService , private activroute:ActivatedRoute  , private route:Router) { 
    this.loading = true;
    service.getdeptfiliere().subscribe(data=>{
      this.deptfilieres = data;
    },(er)=>{},()=>{this.loading = false;

      if(this.activroute.firstChild){
        this.deptfilieres.forEach(element => {
          element['items'].forEach(element => {
            if(element.id == this.activroute.firstChild.snapshot.params['filiereid']){
                element.selected = true;
            }
          });
        });
      }
    })
  }

  ngOnInit() {
  }

  selectedfiliereid = 0;
  selectedfilieretitle = ""
  changeSelection(e) {
    if(e.itemData.departement_id){
    if(this.selectedfiliereid != e.itemData.id){
      // console.log(e.itemData.id)
      this.selectedfiliereid =e.itemData.id;
      this.selectedfilieretitle=e.itemData.text;
      this.route.navigate(['/dashboard/actualite/gestion/'+e.itemData.text+'/'+e.itemData.id])
    }
    } 
  }

}
