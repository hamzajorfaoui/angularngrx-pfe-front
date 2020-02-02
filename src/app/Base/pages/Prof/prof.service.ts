import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private http:HttpClient) { }
  getprofs() :any{
    return this.http.get<Prof[]>("http://127.0.0.1:8000/api/prof")
          .toPromise()
          .then((data: any[]) => {
              return  data;
          }).catch(e => {
            throw e && e.error && e.error.Message;
        });
  }
  addprofs(values){
    console.log(values)
    return this.http.post<Prof>("http://127.0.0.1:8000/api/prof" , values)
          .toPromise()
          .then((data: any) => {
              return  data;
          }).catch(e => {
            throw e && e.error && e.error.Message;
        });
  }
  updateprofs(id , values){
    console.log(values)
    return this.http.put<Prof>("http://127.0.0.1:8000/api/prof/"+id , values)
          .toPromise()
          .then((data: any) => {
              return  data;
          }).catch(e => {
            throw e && e.error && e.error.Message;
        });
  }
  deleteprof(id){
    return this.http.delete<Prof>("http://127.0.0.1:8000/api/prof/"+id)
    .toPromise()
    .then((data: any) => {
        return  data;
    }).catch(e => {
      throw e && e.error && e.error.Message;
  });
  }
  emailexist(email){
    return this.http.get("http://127.0.0.1:8000/api/prof/profemail/"+email)
  }
  emailexistupdate(email , id:number){
    return this.http.get("http://127.0.0.1:8000/api/prof/profemail/"+id+"/"+email)
  }

}
export class Prof {
  id: number;
  fullname: string;
  email: string;
}

