import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component'
const routes: Routes = [

  {
    path: 'home',
    component: FirstComponent,
  },
  {
    path:'lazy',
    loadChildren: () => import('src/app/lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
