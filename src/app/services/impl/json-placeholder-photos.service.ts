import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { baseUrl } from 'src/app/config/api-config';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from '../photos.service';

@Injectable()
export class JsonPlaceholderPhotosService implements PhotosService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchPhotos(albumId: number, { page, limit }): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${baseUrl}/albums/${albumId}/photos?_page=${page}&_limit=${limit}`).pipe(take(1));
  }

  fetchFirstPhotoFromAlbum(albumId: number): Observable<Photo> {
    return this.httpClient.get<Photo[]>(`${baseUrl}/photos?albumId=${albumId}&_limit=1`).pipe(
      map(photos => photos[0]),
      take(1)
    );
  }
}
