export class AlbumNotFoundError extends Error {
  constructor() {
    super('O álbum informado não foi encontrado');
    this.name = 'AlbumNotFoundError';
  }
}
