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
  Semaines_full_text=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
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
    if(e){
     var _this = e.target;
    console.log((e.pageX + ' , ' + e.pageY));
    $(_this).tooltip({
      title: 'Semaine '+e.target.getAttribute('data_semaine')+' '+this.Semaines_full_text[e.target.getAttribute('data_jour')]
    }).tooltip('show');  
    }
   
  }
  select_day(e){
    if(e){
    var _this = e.target;
    var semaine = _this.getAttribute('data_semaine');
    var jour = _this.getAttribute('data_jour');
    var semestre = _this.getAttribute('data_semestre');
    $('rect')
    .filter(function(index){
      return this != _this
    })
    .css('opacity','0.5');
    $(_this)    
    .css('opacity','1');

    this.apply_changes(semestre , semaine , jour);  
    }

  }
  jour_selected;
  apply_changes(semestre , semaine , jour){
   this.jour_selected={
     'semestre':semestre,
     'semaine':semaine,
     'jour':jour
   }
  }
}
