import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumNotFoundError } from 'src/app/shared/errors/album-not-found-error';
import { AlbumModel } from 'src/app/shared/models/album.model';
import { Photo } from 'src/app/shared/models/photo.model';
import { AlbumsService } from 'src/app/shared/services/albums.service';
import { PhotosService } from 'src/app/shared/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [AlbumsService, PhotosService]
})
export class PhotosComponent implements OnInit {
  album: AlbumModel;
  photos: Photo[];

  constructor(private route: ActivatedRoute, private readonly albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.fetchAlbum();
  }

  private fetchAlbum(): void {
    this.albumsService.fetchAlbumById(this.getAlbumIdFromUrl()).subscribe(result => {
      if (result instanceof AlbumNotFoundError) {
        return;
      }
      this.album = result;
    });
  }

  private getAlbumIdFromUrl(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
}
