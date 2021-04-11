import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../models/photo.model';

@Injectable()
export class PhotosService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly httpClient: HttpClient) {}

  fetchPhotos(albumId: number, { page, limit }): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}/albums/${albumId}/photos?_page=${page}&_limit=${limit}`);
  }

  fetchFirstPhotoFromAlbum(albumId: number): Observable<Photo> {
    return this.httpClient.get<Photo[]>(`${this.baseUrl}/photos?albumId=${albumId}&_limit=1`).pipe(map(photos => photos[0]));
  }
}
