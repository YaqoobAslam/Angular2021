import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";



@Component({
  selector: 'app-nextroute',
  templateUrl: './nextroute.component.html',
  styleUrls: ['./nextroute.component.css']
})
export class NextrouteComponent implements OnInit {


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }
}
