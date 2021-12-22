import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../Book";
@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
  book = new Book();
  profileForm!: FormGroup;
  title = 'registration';
  users: any []=[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      'id': new FormControl(this.book.id)

    })

    this.profileForm.valueChanges.subscribe(value => {
      this.book = value
      console.log(this.book)
    })

  }
  Getdata() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    //let params1 = new HttpParams().set('id',1)
    this.http.post<any>('http://localhost:8080/signupform/signup', {
      //"id": this.obj.id
    }).subscribe(data => {
      this.users = data;
      console.log(data)
    })
  }
}
