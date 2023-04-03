import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router"
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  not_logged_in = false;

  public users : User[];
  name : string="";
  @Output() login = new EventEmitter<String>();

  constructor (private router:Router, private userservice:UserService) {
    this.users = new Array<User>();
  }
  ngOnInit() : void {
    this.getUsers();
  }

  public getUsers():void {
    this.userservice.findAll().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  user = new User();
  msg="";
  
  public UserLogin(){
    this.userservice.UserLogin(this.user).subscribe(
      data =>{
              this.router.navigateByUrl("/game-access");
              console.log("Response recieved ");
              console.log(this.user);
            },
      error => {this.not_logged_in = true;
                console.log("exception");
                this.msg="Enter valid credentials";
              }
    );
    this.getUsers();
    for(let i = 0; i < this.users.length;i++){
      if(this.user.email == this.users[i].email){
        this.user.name = this.users[i].name;
        this.user.is_admin = this.users[i].is_admin;
        console.log(this.user.is_admin);
      }else{
        console.log("not found")
      }
    }
    this.userservice.name=this.user.name;
    this.userservice.isAdmin=this.user.is_admin;
  }

}