import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl:string;
  public name:String;
  public isAdmin:Boolean;

  constructor(private http:HttpClient) {
    this.usersUrl = "http://localhost:8080/users";
   }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl+"/add", user);
  }

  public UserLogin(user : User) :Observable<any>{
      return this.http.post('http://localhost:8080/users/login',user);
  }

  public getName():Observable<User>{
    return this.http.get<User>(this.usersUrl);
  }

  public registerUser(user:User): Observable<any>{
    return this.http.post('http://localhost:8080/users/register',user)
  }
}