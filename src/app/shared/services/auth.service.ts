import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private fakeAuthToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor() {}

  login(email: string, password: string): Observable<string | InvalidCredentialsError> {
    if (email === this.fakeUser.email && password === this.fakeUserPassword) {
      localStorage.setItem(this.fakeAuthTokenKey, this.fakeAuthToken);
      return of(this.fakeAuthToken);
    }

    return of(new InvalidCredentialsError());
  }

  logout(): Observable<void> {
    return of(localStorage.removeItem(this.fakeAuthTokenKey));
  }

  getLoggedUser(): Observable<User> {
    const token = localStorage.getItem(this.fakeAuthTokenKey);

    if (token && token === this.fakeAuthToken) {
      return of(this.fakeUser);
    }
    return of(null);
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.getLoggedUser().pipe(map(user => !!user));
  }
}
