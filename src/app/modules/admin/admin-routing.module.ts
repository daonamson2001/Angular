import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ListComponent } from './components/list/list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {path: 'admin-list', component: ListComponent},
      {path: 'movie-detail/:id', component: MovieDetailComponent},
      {path: 'add', component: AddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
