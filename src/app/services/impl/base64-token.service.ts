import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';

@Injectable()
export class Base64TokenService implements TokenService {
  constructor() {}

  encrypt(data: any): string {
    return btoa(data);
  }

  decrypt(token: string): any {
    return atob(token);
  }
}
