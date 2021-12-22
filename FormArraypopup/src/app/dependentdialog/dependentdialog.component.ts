import {Component, Inject, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-dependentdialog',
  templateUrl: './dependentdialog.component.html',
  styleUrls: ['./dependentdialog.component.css']
})
export class DependentdialogComponent implements OnInit{

  constructor(private fb : FormBuilder, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {}

  profileForm: FormGroup = this.initializeGroup();


  ngOnInit(): void {
    this.setForm();
    console.log(this.data.noofdependent)
  }

  initializeGroup(): any {
    return this.fb.group({});
  }

  setForm(){
    this.profileForm = this.fb.group({
      users: this.fb.array([])
    })
    for (let i = 0; i <this.data.noofdependent; i++) {
      this.users.controls.push(this.data.noofdependent);
    }
    console.log(this.data)
  }

  get users(){
    return this.profileForm.get('users') as FormArray;
  }
}
