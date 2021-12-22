import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogElementsExampleComponent} from "./dialog-elements-example/dialog-elements-example.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleComponent);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




}
