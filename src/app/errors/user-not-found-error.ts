export class UserNotFoundError extends Error {
  constructor() {
    super('Não foi encontrada uma conta com os dados fornecidos');
    this.name = 'UserNotFoundError';
  }
}
