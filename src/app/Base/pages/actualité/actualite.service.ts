import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http:HttpClient) { }

  getdata(idf){ 
    return this.http.get("http://127.0.0.1:8000/api/data/getData/"+idf)
  }
  addannonce(values , idfiliere){
    return this.http.post("http://127.0.0.1:8000/api/annonce",{
      "date_prevue":this.convertdate(values['Date Prévu']),
      "date_auralieu":this.convertdate(values['Date aura Lieu']),
      "typeannonce_id":values["type d'annonce"],
      "matiere_id":values['matiere'],
      "prof_id":values['professeur'],
      "filiere_id":idfiliere,
      "salle":12,
    })

  }
  convertdate(datep){
     var d = datep;
     var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(""+d.getMinutes()/5)*5).toString().length==2?(parseInt(""+d.getMinutes()/5)*5).toString():"0"+(parseInt(""+d.getMinutes()/5)*5).toString())+":00";
     return date_format_str
  }
  getannoncebyF(){
    return this.http.get("http://127.0.0.1:8000/api/annonce")
  }
} 
