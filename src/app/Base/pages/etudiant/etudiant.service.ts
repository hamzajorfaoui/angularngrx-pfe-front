import { Dept_Fillfacade } from './../../../State';
import { Observable } from 'rxjs';
import { map, tap, filter} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throws } from 'assert';

export interface departement {
  id:number;
  text:String;
  items:filiere[];
  expanded?: boolean;
  selected?: boolean;
}
export interface filiere{
  id:String;
  text:String;
  departement_id: number;
  selected?: boolean;
}
@Injectable({
    providedIn: 'root'
  })
  export class EtudiantService {
  
    constructor(private http:HttpClient , private DDF:Dept_Fillfacade) { }
    getdeptfiliere2(){
 return this.http.get("http://127.0.0.1:8000/api/departements")
            .pipe(
                tap((data)=> console.log(data)),    
                map((datas:departement[]) => {return datas['data']
                .filter((data:departement)=>data.expanded = true)
                .filter((data:departement)=>data.text = data['name'])
                .filter((data:departement)=>data.items=data['filiere'])
                .filter((data:departement)=> data.items.filter((fil:filiere)=>fil.text = fil["name"]+' '+fil['niveau']))
                .filter((data:departement)=> data.items.filter((fil:filiere)=>fil.id = fil['id']+"-")) 
              }),
               )
    }
   getdeptfiliere(){
      return this.DDF.Dept_Fill_All$
                
            //   .toPromise()
            //   .then((data)=>{
            //       return data;
            //   })
            //   .catch((e)=>{throw e && e.error && e.error.Message;})
   }
   getetudiantbyfiliere(filiereid){
    return this.http.get("http://127.0.0.1:8000/api/etudiant/etudbyfiliere/"+filiereid)
           .toPromise() 
           .then(data=>{return data})
           .catch(e => {
            throw e && e.error && e.error.Message;
        })
   }
   addetudiant(values , idfiliere){
    values.filiere_id=idfiliere;
    return this.http.post("http://127.0.0.1:8000/api/etudiant",values)
           .toPromise() 
           .then(data=>{
               return data
            })
           .catch(e => {
            throw e && e.error && e.error.Message;
        })
   }
   updateetudiant(id , etudiant){
       console.log(etudiant)
    return this.http.put("http://127.0.0.1:8000/api/etudiant/"+id,etudiant)
    .toPromise() 
    .then(data=>{  
        console.log(data)
        if(data.hasOwnProperty('error')){
            throw data
        }else{
           return data['data'] 
        }})
    .catch(e => {
     throw e && e.error && e.error.Message;
 })
   }
   cinexist(params){
    return this.http.get("http://127.0.0.1:8000/api/etudiant/cinexiste/"+params)
   }
   cneexist(params){
    return this.http.get("http://127.0.0.1:8000/api/etudiant/cneexiste/"+params)
   }

   getetudiant(idetudiant){
     return this.http.get("http://127.0.0.1:8000/api/etudiantwithcompte/"+idetudiant)
   }
   searchetudiant(searchwith , searchvalue){
    return this.http.get("http://127.0.0.1:8000/api/etudiant/search", 
    {params: new HttpParams()
            .set('keyword', searchvalue)
            .set('column', searchwith)
    })
   }
  }

