import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { baseUrl } from 'src/app/config/api-config';
import { AlbumNotFoundError } from 'src/app/errors/album-not-found-error';
import { AlbumModel } from 'src/app/models/album.model';
import { AlbumsService } from '../albums.service';

@Injectable()
export class JsonPlaceholderAlbumsService implements AlbumsService {
  constructor(private httpClient: HttpClient) {}

  fetchAlbums(userId: number): Observable<AlbumModel[]> {
    return this.httpClient.get<AlbumModel[]>(`${baseUrl}/albums?userId=${userId}`).pipe(take(1));
  }

  fetchAlbumById(id: number): Observable<AlbumModel | AlbumNotFoundError> {
    return this.httpClient.get<AlbumModel>(`${baseUrl}/albums/${id}`).pipe(
      catchError(() => of(new AlbumNotFoundError())),
      take(1)
    );
  }
}
