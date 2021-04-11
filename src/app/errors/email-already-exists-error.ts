export class EmailAlreadyExistsError extends Error {
  constructor() {
    super('Já existe um usuário cadastrado com o e-mail informado');
    this.name = 'EmailAlreadyExistsError';
  }
}
