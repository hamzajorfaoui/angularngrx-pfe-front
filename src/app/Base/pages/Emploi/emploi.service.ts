import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emploidutemps } from './emploidutemps/emploidutemps.component';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private http:HttpClient) { }

  addemploidutemps(Data){
    const formData = new FormData();
    Data.SemestreId = Data.SemestreId.substr(Data.SemestreId.length - 1);
    formData.append('semester_id', Data.SemestreId);
    formData.append('filiere_id', Data.FiliereId);
    formData.append('emploitemp', Data.emploiImage[0]);
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':'multipart/form-data',
        'Accept': 'application/json'
      })
    };
  return this.http.post('http://127.0.0.1:8000/api/temps',formData , httpOptions);
  }
  getemploidutemps(){
  return this.http.get('http://127.0.0.1:8000/api/temps')
  .toPromise()
  .then(
    data=>{
      console.log(data)
      return data
    }
  )
  .catch(er=>{
    throw er
  })
  }

}
