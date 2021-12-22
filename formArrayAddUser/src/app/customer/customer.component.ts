import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  profileForm!: FormGroup;
  users!: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      users: this.fb.array([this.createUser()])
    })
  }

  createUser(): FormGroup {
    return this.fb.group({
      firstname: '',
      lastname: '',
      age: '',
      address: ''
    })
  }

  addUser(): void {
    this.users = this.profileForm.get('users') as FormArray;
    this.users.push(this.createUser())
  }
  deleteUser():void {

  }
}
