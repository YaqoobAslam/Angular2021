import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogElementsExampleComponent } from './dialog-elements-example/dialog-elements-example.component';
import {MatDialogModule} from "@angular/material/dialog";
import { NextrouteComponent } from './nextroute/nextroute.component';
import {RouterModule} from "@angular/router";
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogElementsExampleComponent,
    NextrouteComponent,
    PopupComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,

    RouterModule.forRoot([
      { path: 'dialognext', component: NextrouteComponent },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
