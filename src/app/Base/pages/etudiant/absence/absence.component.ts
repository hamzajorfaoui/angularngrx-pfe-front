import { EtudiantService } from './../etudiant.service';
import { Component, OnInit, Input } from '@angular/core';
import { Semestres } from "../Semestres";
declare var $;
@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.scss']
})
export class AbsenceComponent implements OnInit {

  constructor(private service:EtudiantService) { }

  @Input() etudiantid;
  @Input() etudiantniveau;
  
  NB_absences = [];
  Semestres=[];
  ngOnInit() {
    this.Semestres=Semestres[this.etudiantniveau-1].semestre;
  
    this.service.get_etudiant_absence(this.etudiantid).subscribe(
      data=>{
        console.log(data)
        for (const semestre of this.Semestres) {
        this.display_data();
        for (const absence of data) {
          if(absence.semester_id == semestre.id){
          this.semaine[absence.semaine-1].jour[absence.jour-1].nb_absences = absence.nb_absence;
          }

        }
        this.NB_absences.push({
          semestre:semestre,
          semaine:this.semaine
        })
      }
      }
    )
  }
  Semaines_text=["Lun","Mer","Ven"];
  Semaines_full_text=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
  semaine:any[]=[];
  jour_positions_Y(i){
    return i*14
  }
  display_data(){
    this.semaine=[];
  for (let index = 0; index < 15; index++) {
    var jour = [];
    for (let index = 0; index < 6; index++){
      jour.push({
        jour:index+1,
        nb_absences:0
      });
    }
    this.semaine.push({number:index+1 ,
                       translate:this.jour_positions_Y(index),
                       jour:jour});
  }
  }
  tooltip(e){
    if(e){
     var _this = e.target;
    // console.log((e.pageX + ' , ' + e.pageY));
    $(_this).tooltip({
      title: 'Semaine '+e.target.getAttribute('data_semaine')+' '+this.Semaines_full_text[e.target.getAttribute('data_jour')]
    }).tooltip('show');  
    }
   
  }
  select_day(e , semestre_id){
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

    this.apply_changes(semestre_id,semestre , semaine , jour);  
    }

  }
  jour_selected;
  Seances=[];
  Seance_Loading = false;
  apply_changes(semestre_id,semestre , semaine , jour){
    this.Etudiant_Seance_Selected = [];
    this.jour_selected={
      'semestre_id':semestre_id,
      'semestre':semestre,
      'semaine':semaine,
      'jour':jour
    };
    this.Etudiant_Seance_Selected==[];
    this.Seances=[];
    this.Seance_Loading=true;
    this.service.get_day_absence(this.etudiantid,semestre_id,semaine,parseInt(jour)+1)
    .subscribe(
      data=>{
        for (let index = 1; index <= 4; index++) {
           this.Seances.push({
            number:index,
            absent:data.includes(index)
          });
        }
        this.Seance_Loading=false;
      },(e)=>{
        this.Seance_Loading=false;
      })
  }
  Etudiant_Seance_Selected=[];
  check_seance(e, seance_absent , seance_number){
   if(e.target.checked){
    this.Etudiant_Seance_Selected.push(seance_number);
   }else{
    this.Etudiant_Seance_Selected = this.Etudiant_Seance_Selected.filter((a)=>{return a != seance_number});
   }
   console.log(this.Etudiant_Seance_Selected);
  if(seance_absent){
    e.target.checked = true;
    this.popupVisible = true;
    this.Seance_Selected = seance_number;
  }
  }
  save_seance_absent(){
    var etudiant_selected = this.Etudiant_Seance_Selected;
    this.Etudiant_Seance_Selected = [];
  this.service.add_day_absence(this.etudiantid,
      this.jour_selected.semestre_id,
      this.jour_selected.semaine,
      parseInt(this.jour_selected.jour)+1,
      etudiant_selected).subscribe(
        data=>{
          this.NB_absences.map((NB_A)=>{
            if(NB_A.semestre.id == this.jour_selected.semestre_id){
              NB_A.semaine[this.jour_selected.semaine-1].jour[this.jour_selected.jour].nb_absences = data.length;
            }
          });
          this.Seances.map(seance=>{
            seance.absent=data.includes(seance.number);
          })
        }
      )
  }
  popupVisible = false;
  Seance_Selected = 0;
  annuleryes =()=>{
    this.service.remove_seance_abcense(this.etudiantid,
      this.jour_selected.semestre_id,
      this.jour_selected.semaine,
      parseInt(this.jour_selected.jour)+1,
      this.Seance_Selected).subscribe(
        data=>{
          this.NB_absences.map((NB_A)=>{
            if(NB_A.semestre.id == this.jour_selected.semestre_id){
              NB_A.semaine[this.jour_selected.semaine-1].jour[this.jour_selected.jour].nb_absences =NB_A.semaine[this.jour_selected.semaine-1].jour[this.jour_selected.jour].nb_absences -1;
            }
          });
          this.Seances[this.Seance_Selected-1].absent = false;
          this.popupVisible = false;
        }
      )
    
  }
  annulerno=()=>{
  this.popupVisible = false;
  }
}
