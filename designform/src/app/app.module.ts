import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    GetuserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
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
