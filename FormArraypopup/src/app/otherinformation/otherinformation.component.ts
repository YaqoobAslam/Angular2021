import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {MaritalStatus} from "../MaritalStatus";
import {LicenceState} from "../LicenceState"
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Service} from '../service';
import {MatDialog} from "@angular/material/dialog";
import {DependentdialogComponent} from "../dependentdialog/dependentdialog.component";
import {Dependentservice} from "../dependentservice";
@Component({
  selector: 'app-otherinformation',
  templateUrl: './otherinformation.component.html',
  styleUrls: ['./otherinformation.component.css']
})
export class OtherinformationComponent implements OnInit,OnChanges,OnDestroy {

  constructor(private fb : FormBuilder, public dialog: MatDialog) {}

  profileForm: FormGroup = this.initializeGroup();
  subscription: Subscription = new Subscription();

  serviceobj = new Service()
  dependentobj = new Dependentservice()

  ngOnChanges(): void {
    this.profileForm.patchValue(this.profileForm)
  }

  ngOnInit(): void {
    this.setForm();
    this.valueChange();


  }

  initializeGroup(): any {
    return this.fb.group({});
  }

  setForm(){
    this.profileForm = this.fb.group(new Service())
  }
  valueChange(){

    this.profileForm = new FormGroup({
     'noofdependent' :new FormControl(this.serviceobj.noofdependent)
    })

    this.profileForm.valueChanges.subscribe(value =>{
      // this.profileForm.patchValue(value)
      this.serviceobj = value
      this.dependentobj = value

      // console.log(this.serviceobj)
      // this.openDialog();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog(): void {

     this.dialog.open(DependentdialogComponent,{
       // data:this.serviceobj,
       data:this.dependentobj

     });
    console.log(this.dependentobj)
  }

  maritalstatus: MaritalStatus[] = [
    {value: 'single-0', viewValue: 'Single'},
    {value: 'married-1', viewValue: 'Married'},
    {value: 'divorced-2', viewValue: 'Divorced'},
  ];
  licencestate: LicenceState[] = [
    {value: 'pk-0', viewValue: 'Pakistan'},
    {value: 'uk-1', viewValue: 'United Kingdom'},
    {value: 'usa-2', viewValue: 'United State'},
  ];
}
