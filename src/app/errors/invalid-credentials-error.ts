export class InvalidCredentialsError extends Error {
  constructor() {
    super('As credenciais informadas são inválidas');
    this.name = 'InvalidCredentialsError';
  }
}
