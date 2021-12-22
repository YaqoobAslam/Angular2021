import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {DTO} from "../dto";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit,OnChanges,OnDestroy {

  profileForm!: FormGroup
  subscription: Subscription = new Subscription();
  Obj:DTO = new DTO();


  constructor(private fb: FormBuilder) {  }

  ngOnChanges(): void {
    this.profileForm.patchValue(this.profileForm)
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      users: this.fb.array([])
    })
    this.addUser();
    this.valueChange();
    this.updateUser();
  }

  valueChange(){
    this.profileForm.valueChanges.subscribe(value =>{
      // console.log(value)
      this.Obj = value;
    })
    console.log(this.Obj)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // createUser(): FormGroup {
  //   return this.fb.group({
  //     firstname: '',
  //     lastname: '',
  //     age: '',
  //     address: ''
  //   })
  // }

  get users(){
    return  this.profileForm.get('users') as FormArray;
  }

  addUser(): void {
    const userFormcontrol = this.fb.group(new DTO())
    this.users.push(userFormcontrol)
  }

  deleteUser(usersIndex: number):void {
    this.users.removeAt(usersIndex)
  }
  updateUser(){
    for(let i=0; i<5; i++){
        const userFormcontrol = this.fb.group(new DTO())
         this.users.push(userFormcontrol)
     }
  }
}
