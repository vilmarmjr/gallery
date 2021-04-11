import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AlbumModel } from 'src/app/models/album.model';
import { AlbumsService } from 'src/app/services/albums.service';
import { AuthService } from 'src/app/services/auth.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [AlbumsService, PhotosService]
})
export class AlbumsComponent implements OnInit {
  albums: AlbumModel[];
  numberOfAlbums = 10;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly albumsService: AlbumsService,
    private readonly photosService: PhotosService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  navigateToPhotosPage(album: AlbumModel): void {
    this.router.navigate([album.id, 'photos'], { relativeTo: this.activatedRoute });
  }

  private fetchAlbums(): void {
    this.authService
      .getLoggedUser()
      .pipe(
        mergeMap(user => this.albumsService.fetchAlbums(user.id)),
        mergeMap(albums => forkJoin(albums.map(this.getAlbumWithThumbnail.bind(this))))
      )
      .subscribe(albums => (this.albums = albums));
  }

  private getAlbumWithThumbnail(album: AlbumModel): Observable<AlbumModel> {
    return this.photosService.fetchFirstPhotoFromAlbum(album.id).pipe(map(photo => ({ ...album, thumbnailUrl: photo.thumbnailUrl })));
  }
}
