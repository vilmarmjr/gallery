import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  encrypt(data: any): string {
    return btoa(data);
  }

  decrypt(token: string): any {
    return atob(token);
  }
}
