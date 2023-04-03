import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userservice:UserService){}
  user = new User();

  valid:boolean = false;

  public registerUser(){
    if(this.user.email != null && this.user.name != null && this.user.password != null){
      this.userservice.registerUser(this.user).subscribe(
        data=> {console.log("success")
      },
        error => console.log("an error has  occured while registering new user")
      );
    }else{
      console.log("enter valid credentials")
      this.valid= true;
    }
  }

}
