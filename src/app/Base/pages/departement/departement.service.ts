import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }

  getdepartements(){
    return this.http.get("http://127.0.0.1:8000/api/dept")
    .toPromise()
    .then((data: any[]) => {
      console.log(data)
        return  data;
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
  adddepartement(values){
    return this.http.post("http://127.0.0.1:8000/api/dept" , values)
    .toPromise()
    .then((data: any) => {
        return  data;
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
  removedepartement(){
   ///////
  }
  updatedepartement(id , values){
    return this.http.put("http://127.0.0.1:8000/api/dept/"+id , values)
    .toPromise()
    .then((data: any) => {
        return  data;
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
  nameexist(name){
    return this.http.get("http://127.0.0.1:8000/api/dept/deptname/"+name)
  }

}
