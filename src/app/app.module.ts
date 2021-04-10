import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainComponent } from './shared/layouts/main/main.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumComponent } from './pages/albums/components/album/album.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, AlbumsComponent, MainHeaderComponent, AlbumComponent, PhotosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
