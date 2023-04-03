import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from './log';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private url:string;

  constructor(private http:HttpClient) {
    this.url= "http://localhost:8080/logs";
   }

  public addLog(log: Log): Observable<any>{
    return this.http.post<Log>("http://localhost:8080/logs/add",log);
  }

  public getLog():Observable<any>{
    return this.http.get<Log[]>("http://localhost:8080/logs");
  }

}
