export class AlbumNotFoundError extends Error {
  constructor() {
    super('Album not found');
    this.name = 'AlbumNotFoundError';
  }
}
