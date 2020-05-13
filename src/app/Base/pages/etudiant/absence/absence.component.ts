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
   this.display_data();
  }
  Seances=[1,2,3,4]
  Semestres=["S1","S2"];
  Semaines_text=["Lun","Mer","Ven"];
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
  select_day(e){
    var _this = e.target;
    var semaine = _this.getAttribute('data_semaine');
    var jour = _this.getAttribute('data_jour');
    $('rect')
    .filter(function(index){
      return this != _this
    })
    .css('opacity','0.5');
    $(_this)    
    .css('opacity','1');

  }
}
