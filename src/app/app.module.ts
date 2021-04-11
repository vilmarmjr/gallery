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
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorPtService } from './shared/services/mat-paginator-pt.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MainComponent, AlbumsComponent, MainHeaderComponent, AlbumComponent, PhotosComponent, NotFoundComponent],
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
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorPtService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
