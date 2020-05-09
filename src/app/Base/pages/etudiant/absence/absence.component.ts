import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   this.display_data()
  }
  semaine:any[]=[];
  jour_positions_Y(i){
    return i*14
  }
 display_data(){
  for (let index = 0; index < 15; index++) {
    this.semaine.push({number:index+1 ,
                       translate:this.jour_positions_Y(index),
                       jour:[1,2,3,4,5,6]});
  }
  }
  tooltip(e){
    var _this = e.target;
    $(_this).tooltip({
      title: 'Semaine '+e.target.getAttribute('data_semaine')+' Jour '+e.target.getAttribute('data_jour')
    }).tooltip('show');
  }
}
