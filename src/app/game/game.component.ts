import { DatePipe } from '@angular/common';
import { Component, OnInit,OnChanges } from '@angular/core';
import { LogService } from '../log.service';
import { Log } from '../log';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit,OnChanges { 
  constructor(public datepipe: DatePipe, private logService: LogService, private userService: UserService){
    this.logs = new Array<string>();
  }

  objects: string[];
  lines = 4;
  columns = 5;
  gen:string = "gen"
  showPopup: boolean = false;
  popupButton: any;
  color:string = "white";
  logs: string[];
  currentDateTime = this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');


  ngOnInit(): void {
    this.generateButtons();
  }

  ngOnChanges(){
    this.generateButtons();
  }

  buttons: any[][] = [];

  generateButtons() {
    this.buttons = [];
    for (let i = 0; i < this.lines; i++) {
      let row = [];
      for (let j = 0; j < this.columns; j++) {
        row.push({
          id: (i * this.columns + j),
          text: '',
          style: {
            "backgroudn-color" : "black",
            'border': 'none',
            'color': 'white',
            'padding': '10px 20px',
            'text-align': 'center',
            'text-decoration': 'none',
            'display': 'inline-block',
            'font-size': '16px',
            'margin': '4px 2px',
            'cursor': 'pointer',
            'border-radius': '16px'
          }
        });
      }
      this.buttons.push(row);
    }
  }

  togglePopup(button: any) {
    this.popupButton = button;
    this.showPopup = !this.showPopup;
  }

  log = new Log(); 

  changeColor(button:any) {
    this.log.oldColor = this.popupButton.style.color;
    button.style = {
      "background-color" : this.color,
      'border': 'none',
            'color': 'white',
            'padding': '10px 20px',
            'text-align': 'center',
            'text-decoration': 'none',
            'display': 'inline-block',
            'font-size': '16px',
            'margin': '4px 2px',
            'cursor': 'pointer',
            'border-radius': '16px'
    }
    this.popupButton = button;
    this.showPopup = !this.showPopup;
    this.logs.push("change made on button "+(button.id +1) + " of color:" + this.color +" at " + this.currentDateTime);
    console.log(this.logs);
    this.log.id = button.id;
    this.log.date= this.currentDateTime as string;
    this.log.userChange = this.userService.name;
    this.log.newColor= this.color;
    console.log(this.log);
    this.logService.addLog(this.log).subscribe(
      data=> console.log(this.log),
      error=> console.log("error while logging")
    );
  }
}