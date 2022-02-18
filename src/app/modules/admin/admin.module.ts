import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListComponent } from './components/list/list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ListComponent,
    MovieDetailComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
