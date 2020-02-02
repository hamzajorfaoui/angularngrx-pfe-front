import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http:HttpClient) { }

  getfiliere(){
    return this.http.get("http://127.0.0.1:8000/api/filiere")
    .toPromise()
    .then((data: any[]) => {
      console.log(data)
        return  data;
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
  addfiliere(values){
    console.log(values)
    return this.http.post("http://127.0.0.1:8000/api/filiere" , {"name":values.name,"dept_id":values.departement_id})
    .toPromise()
    .then((data: any) => {
        return  data; 
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
  updatefiliere(id , values){
    console.log(values);
    return this.http.put("http://127.0.0.1:8000/api/filiere/"+id , {"name":values.name,"dept_id":values.departement_id})
    .toPromise()
    .then((data: any) => {
        return  data;
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
}
