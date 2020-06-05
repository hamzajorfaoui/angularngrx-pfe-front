import { EtudiantService } from './../etudiant.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DxTreeViewComponent } from 'devextreme-angular';

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
      this.route.navigate(['/dashboard/etudiant/gestion/'+e.itemData.text+'/'+parseInt(e.itemData.id)])
    }
    }
  }

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
    },(er)=>{},()=>{})
   
  }
  @ViewChild("targettree", { static: false }) dxtree: DxTreeViewComponent;

  ngOnInit() {

    this.route.events.subscribe(event=>{
      if (event instanceof NavigationEnd) {
       if(this.route.url == '/dashboard/etudiant/gestion'){
        this.dxtree.instance.unselectAll();
        this.selectedfiliereid = 0;
       }
      }
    })
 
  }
  imageVisible = true;
  onActivate(e){
  this.imageVisible=false;
  }
  onDeactivate(e){
    this.imageVisible=true;
  }


}
