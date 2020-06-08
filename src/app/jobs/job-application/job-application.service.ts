import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  constructor(private http: HttpClient) { }

  getJobApplication(id){
    let headers = new HttpHeaders().set("content-type", "application/json;charset=UTF-8");
    return this.http.get("http://localhost:8080/jobApplication/" + id,  { headers: headers });
  }
}
