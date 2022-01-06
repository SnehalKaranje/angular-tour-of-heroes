import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [{ 
  path: 'heroes', 
  component: HeroesComponent 
},{ 
  path: '', 
  redirectTo: '/dashboard', 
  pathMatch: 'full' 
},{
  path: 'dashboard',
  component : DashboardComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }