import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    ClientDashboardComponent,
    MovieDetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
