import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    AdduserComponent,
    GetuserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'adduser', component: AdduserComponent },
      { path: 'getuser', component: GetuserComponent },
      { path: 'updateuser', component: UpdateuserComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
