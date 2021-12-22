import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "./Book";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http: HttpClient) { }
  profileForm!: FormGroup;

  users: any = [];
  book = new Book();

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'id': new FormControl(this.book.id),
      'firstname': new FormControl(this.book.firstname),
      'lastname': new FormControl(this.book.lastname),
      'email': new FormControl(this.book.email),
      'password': new FormControl(this.book.password),
      'phonenumber': new FormControl(this.book.phonenumber),
      'address': new FormControl(this.book.address)
    })

    this.profileForm.valueChanges.subscribe(value =>{
      this.book=value
    })
  }

  Userdata(){
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
    //const headers = { 'content-type': 'application/json'}
    // console.log('Payload',this.book)
    this.http.post<any>('http://localhost:8080/signupform/Inserted',{
      "id":this.book.id,
      "firstname": this.book.firstname,
      "lastname": this.book.lastname,
      "email": this.book.email,
      "password": this.book.password,
      "phonenumber": this.book.phonenumber,
      "address": this.book.address
    }).subscribe(data => {
      // this.book = data
      console.log(data)
    })
  }
}
