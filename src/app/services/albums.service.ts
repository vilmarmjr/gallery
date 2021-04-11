import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { baseUrl } from '../config/api-config';
import { AlbumNotFoundError } from '../errors/album-not-found-error';
import { AlbumModel } from '../models/album.model';

@Injectable()
export class AlbumsService {
  constructor(private httpClient: HttpClient) {}

  fetchAlbums(userId: number): Observable<AlbumModel[]> {
    return this.httpClient.get<AlbumModel[]>(`${baseUrl}/albums?userId=${userId}`);
  }

  fetchAlbumById(id: number): Observable<AlbumModel | AlbumNotFoundError> {
    return this.httpClient.get<AlbumModel>(`${baseUrl}/albums/${id}`).pipe(catchError(() => of(new AlbumNotFoundError())));
  }
}
