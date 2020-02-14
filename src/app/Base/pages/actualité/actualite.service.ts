import { map, filter, tap } from 'rxjs/operators';
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
      "salle":values['salle'],
    })
    .toPromise()
    .then(data=>{
      return data;
    })

  }
  convertdate(datep){
     var d = datep;
     var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(""+d.getMinutes()/5)*5).toString().length==2?(parseInt(""+d.getMinutes()/5)*5).toString():"0"+(parseInt(""+d.getMinutes()/5)*5).toString())+":00";
     return date_format_str
  }
  getannoncebyF(idf){
    return this.http.get("http://127.0.0.1:8000/api/annonce/annoncesbyfillier/"+idf)
           .toPromise()
           .then(
             data=>{
               return data['data']
             }
           )
  }
  removeannoce(id){
    return this.http.delete("http://127.0.0.1:8000/api/annonce/"+id)
           .toPromise()
           .then(
             data=>{
               return data
             }
           )
           .catch(er=>{
             throw er
           })
  }

  addactualite(titre , content , idF){
   return this.http.post("http://127.0.0.1:8000/api/actualite",{
     "title":titre,
     "contenu":content,
     "filiers_id":idF
   })
  }
  getactualites(){
    return this.http.get("http://127.0.0.1:8000/api/actualite")
           .pipe(
             map((data:any[])=>{return data['data']
                .filter((data:any)=>{
                        data.filiresname = ""
                        for (const filiere of data.filieres) {
                          data.filiresname += filiere.name+" ";
                        }
                        return data
                })
             })
           )
           .toPromise()
           .then(
             data=>{
               console.log(data);
               return data
             }
           )
  }

  updateactualite(idA , value){
    return this.http.put("http://127.0.0.1:8000/api/actualite/"+idA,value)
    .pipe(
      map((data:any[])=>{return data['data']
         .filter((data:any)=>{
                 data.filiresname = ""
                 for (const filiere of data.filieres) {
                   data.filiresname += filiere.name+" ";
                 }
                 return data
         })
      })
    )
    .toPromise()
    .then(
      data=>{
        console.log(data);
        return data
      }
    )
  }
  removeactualite(idA){
    return this.http.delete("http://127.0.0.1:8000/api/actualite/"+idA)
           .toPromise()
           .then(
             data=>{
               return data
             }
           )
           .catch(er=>{
             throw er
           }) 
  }
} 
