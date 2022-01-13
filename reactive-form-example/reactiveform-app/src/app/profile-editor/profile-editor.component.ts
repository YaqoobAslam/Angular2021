import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address:  new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
  })
  });
  onSubmit(){
    console.warn(this.profileForm.value);
  }
  updaterofile(){
    this.profileForm.patchValue({
      firstNmae: 'Nancy',
      address: {
        street: '123 Drew Street',
      }
    })
  }
}
