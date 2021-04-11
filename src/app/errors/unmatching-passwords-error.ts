export class UnmatchingPasswordsError extends Error {
  constructor() {
    super('As senhas inseridas não coincidem');
    this.name = 'UnmatchingPasswordsError';
  }
}
