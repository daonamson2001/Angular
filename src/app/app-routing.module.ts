import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {
    path: 'client',
    loadChildren: () =>
      import  ('./modules/client/client.module').then(m => m.ClientModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import  ('./modules/admin/admin.module').then(m => m.AdminModule),
  },

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
