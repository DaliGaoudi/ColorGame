import { Component, Input, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-game-access',
  templateUrl: './game-access.component.html',
  styleUrls: ['./game-access.component.css']
})
export class GameAccessComponent {

  constructor(private userservie:UserService){}

  name=this.userservie.name;
  isAdmin=this.userservie.isAdmin;

}