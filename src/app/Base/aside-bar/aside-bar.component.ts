import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Aside } from "./aside";
declare var $;

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit, AfterViewInit {

  Contents:any=[]; 
  Items:any =[];
  @Input() asidebar_closed;
  constructor() { }

  ngOnInit() {
    console.log(this.asidebar_closed);
    this.Contents = Aside.content;
    this.Items=Aside.items;
    this.Showcollapse();
  }
  ngAfterViewInit() {
    this.Showcollapse();
  }
  getitem(id:Number){
    var item1 : any = 0;
    this.Items.forEach(item => {
      if (item.id === id) {
         item1 = item;
      }else{  
      }
    });
   return item1
  }

  Showcollapse(){
    this.Contents.forEach(item => {
      if (item.active == true ) {
        //item.active = false;
        $('#'+item.titre).collapse('show');
        console.log(item.titre);
        
      }
    });
  }
  togllecolapse(idcolapse , idcontent){
    for (let index = 0; index < this.Contents.length; index++) {
      if(index == idcontent){
        if(this.Contents[idcontent].active == false){
          this.Contents[idcontent].active = true;
        }else{
          this.Contents[idcontent].active = false;
        }
        $('#'+idcolapse).collapse('toggle');
      }else{
        this.Contents[index].active = false;
        $('#'+this.Contents[index].titre).collapse('hide');
      }
      
    }
  }

}
