import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { LoginComponent } from './pages/login/login.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { AuthGuard } from './shared/guards/auth.guard';
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
      { path: 'albums', component: AlbumsComponent, canActivate: [AuthGuard] },
      { path: 'photos', component: PhotosComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
