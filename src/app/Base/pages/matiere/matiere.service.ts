import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http:HttpClient) { }

  getmatieres(idF){
  return this.http.get("http://127.0.0.1:8000/api/filier/matieres/"+idF)
         .toPromise()
         .then(data=>{
             return data
         })
         .catch(er=>{throw er})
  }
  addmatieres(values , idf ){
    return this.http.post("http://127.0.0.1:8000/api/matiere" , 
    {"name":values.name, "filiere_id":idf})
    .toPromise()
    .then(data=>{
      if(data.hasOwnProperty('error')){
        throw data
      }else{
        return data
      }
        
    })
    .catch(er=>{throw er})
  }
  updatematieres(values ,idm ,  idf){
    return this.http.put("http://127.0.0.1:8000/api/matiere/"+idm , 
    {"name":values.name, "filiere_id":idf})
    .toPromise()
    .then(data=>{
        return data 
    })
    .catch(er=>{throw er})
  }
  
}

