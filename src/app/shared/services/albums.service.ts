import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from '../models/album.model';

@Injectable()
export class AlbumsService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  fetchAlbums(userId: number): Observable<AlbumModel[]> {
    return this.httpClient.get<AlbumModel[]>(`${this.baseUrl}/albums?userId=${userId}`);
  }
}
