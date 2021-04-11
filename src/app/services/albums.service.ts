import { Observable } from 'rxjs';
import { AlbumNotFoundError } from '../errors/album-not-found-error';
import { AlbumModel } from '../models/album.model';

export abstract class AlbumsService {
  abstract fetchAlbums(userId: number): Observable<AlbumModel[]>;
  abstract fetchAlbumById(id: number): Observable<AlbumModel | AlbumNotFoundError>;
}
