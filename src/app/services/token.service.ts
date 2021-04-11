export abstract class TokenService {
  abstract encrypt(data: any): string;
  abstract decrypt(token: string);
}
