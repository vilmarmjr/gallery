import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

export abstract class PhotosService {
  abstract fetchPhotos(albumId: number, { page, limit }): Observable<Photo[]>;
  abstract fetchFirstPhotoFromAlbum(albumId: number): Observable<Photo>;
}
