import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day2Component } from './day2/day2.component';


const routes: Routes = [
  {
    path: 'day-two',
    component: Day2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
