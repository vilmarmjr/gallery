import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlbumNotFoundError } from 'src/app/errors/album-not-found-error';
import { AlbumModel } from 'src/app/models/album.model';
import { Photo } from 'src/app/models/photo.model';
import { AlbumsService } from 'src/app/services/albums.service';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [AlbumsService, PhotosService]
})
export class PhotosComponent implements OnInit {
  album: AlbumModel;
  photos: Photo[];
  numberOfPhotosPerAlbum = 50;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly albumsService: AlbumsService,
    private readonly photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.fetchAlbum();
    this.fetchPhotos();
  }

  fetchPhotosFromPageEvent(pageEvent: PageEvent): void {
    this.fetchPhotos(pageEvent.pageIndex + 1, pageEvent.pageSize);
  }

  private fetchPhotos(page = 1, limit = 10): void {
    this.photosService.fetchPhotos(this.getAlbumIdFromUrl(), { page, limit }).subscribe(photos => (this.photos = photos));
  }

  private fetchAlbum(): void {
    this.albumsService.fetchAlbumById(this.getAlbumIdFromUrl()).subscribe(result => {
      if (result instanceof AlbumNotFoundError) {
        this.toastrService.error(result.message);
        return this.router.navigate(['albums']);
      }
      this.album = result;
    });
  }

  private getAlbumIdFromUrl(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
}
