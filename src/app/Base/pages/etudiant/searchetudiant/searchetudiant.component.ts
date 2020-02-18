import { Router } from '@angular/router';
import { EtudiantService } from './../etudiant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchetudiant',
  templateUrl: './searchetudiant.component.html',
  styleUrls: ['./searchetudiant.component.scss']
})
export class SearchetudiantComponent implements OnInit {

  constructor(private ES:EtudiantService , private route:Router) { }
  priorities = [
    "cin", 
    "cne", 
    "fullname"
  ];
  ngOnInit() {
  }

  Searchwith :String = "";
  Searchvalue :String = "";
  etudiants = [];
  onValueChanged($event){
    this.Searchwith = $event.value;
    this.seachforstudend(this.Searchvalue);
  }
  onValueChangedTX(e) {
   this.Searchvalue = e.value;
   this.seachforstudend(e.value);
}

seachforstudend(serchW){
  if(serchW.trim() != ""  && this.Searchwith != ""){
    this.ES.searchetudiant( this.Searchwith , serchW ).subscribe(
    data=>{
      console.log(data)
      this.etudiants = data['data'];
      }
    )
    }else{
      this.etudiants = []
    }
  }
  onclicklist(e){
    this.route.navigate(['/dashboard/etudiant/profile/'+e.itemData.id])
    console.log(e.itemData.id)
  }
}
