import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './shared/layouts/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'albums', pathMatch: 'full' },
      { path: 'albums', component: AlbumsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
