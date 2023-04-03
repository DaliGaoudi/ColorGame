import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../log';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit{

  constructor(private Service: LogService, private userservice: UserService){}

  logs: Log[];
  name= this.userservice.name;

  public ngOnInit(): void {
    this.Service.getLog().subscribe(
      (response: Log[]) => {this.logs = response;
                              console.log(response)},
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

}
