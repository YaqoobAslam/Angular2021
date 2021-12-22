import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NextrouteComponent} from "../nextroute/nextroute.component";
import {PopupComponent} from "../popup/popup.component";


@Component({
  selector: 'app-dialog-elements-example',
  templateUrl: './dialog-elements-example.component.html',
  styleUrls: ['./dialog-elements-example.component.css']
})


export class DialogElementsExampleComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}


  nextRoute() {
   NextrouteComponent;
  }

  openPopup(){
     this.dialog.open(PopupComponent, {
       data: {
         animal: 'tiger',
         beachanimal: 'sea turtles'

       }
     });
  }

}
