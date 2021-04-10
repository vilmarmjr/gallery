import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { InvalidCredentialsError } from '../errors/invalid-credentials-error';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly fakeUser: UserModel = {
    id: 1,
    name: 'User',
    email: 'user@user.com'
  };
  private readonly fakeUserPassword = '1234';
  private readonly fakeAuthTokenKey = 'auth_token';
  private readonly fakeAuthToken =
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

  getLoggedUser(): Observable<UserModel> {
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
