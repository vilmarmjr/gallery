import { sign, verify } from 'jsonwebtoken';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InvalidCredentialsError } from '../errors/invalid-credentials-error';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeUser: User = {
    id: 1,
    name: 'User',
    email: 'user@user.com'
  };
  private fakeUserPassword = '1234';
  private fakeAuthTokenKey = 'auth_token';
  private fakeJwtSecret = 'any_secret';

  constructor() {}

  login(email: string, password: string): Observable<string | InvalidCredentialsError> {
    if (email === this.fakeUser.email && password === this.fakeUserPassword) {
      const jwtPromise = sign(this.fakeUser, this.fakeJwtSecret);
      return from(jwtPromise).pipe(tap((token: string) => localStorage.setItem(this.fakeAuthTokenKey, token)));
    }

    return of(new InvalidCredentialsError());
  }

  logout(): Observable<void> {
    return of(localStorage.removeItem(this.fakeAuthTokenKey));
  }

  getUser(): Observable<User> {
    try {
      const token = localStorage.getItem(this.fakeAuthTokenKey);

      if (token) {
        const user = verify(token, this.fakeJwtSecret) as User;
        return of(user);
      }
    } catch (error) {
      return null;
    }
  }
}
