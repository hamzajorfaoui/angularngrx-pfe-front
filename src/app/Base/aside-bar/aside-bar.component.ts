import { Component, OnInit } from '@angular/core';
import { Aside } from "./aside";
declare var $;

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent implements OnInit {

  Contents:any=[]; 
  Items:any =[];
  constructor() { }

  ngOnInit() {
    this.Contents = Aside.content;
    this.Items=Aside.items;
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
