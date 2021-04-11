import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AlbumsComponent } from './pages/albums/albums.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PhotosComponent } from './pages/photos/photos.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'albums', pathMatch: 'full' },
      { path: 'albums', component: AlbumsComponent, canActivate: [AuthGuard] },
      { path: 'albums/:id/photos', component: PhotosComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
