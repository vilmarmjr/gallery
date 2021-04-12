import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailAlreadyExistsError } from 'src/app/errors/email-already-exists-error';
import { InvalidCredentialsError } from 'src/app/errors/invalid-credentials-error';
import { UnmatchingPasswordsError } from 'src/app/errors/unmatching-passwords-error';
import { UserNotFoundError } from 'src/app/errors/user-not-found-error';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';
import { TokenService } from '../token.service';

@Injectable()
export class FakeAuthService implements AuthService {
  private readonly usersKey = 'users';
  private readonly fakeAuthTokenKey = 'auth_token';

  constructor(private readonly tokenService: TokenService) {}

  login(email: string, password: string): Observable<string | InvalidCredentialsError | UserNotFoundError> {
    const user = this.getRegisteredUsers().find(user => user.email === email);

    if (!user) {
      return of(new UserNotFoundError());
    }

    if (user.password !== password) {
      return of(new InvalidCredentialsError());
    }

    const fakeToken = this.tokenService.encrypt(JSON.stringify(user));
    localStorage.setItem(this.fakeAuthTokenKey, fakeToken);
    return of(fakeToken);
  }

  logout(): Observable<void> {
    return of(localStorage.removeItem(this.fakeAuthTokenKey));
  }

  getLoggedUser(): Observable<UserModel> {
    const fakeToken = localStorage.getItem(this.fakeAuthTokenKey);

    if (fakeToken) {
      return of(JSON.parse(this.tokenService.decrypt(fakeToken)));
    }
    return of(null);
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.getLoggedUser().pipe(map(user => !!user));
  }

  register(name: string, email: string, password: string): Observable<UserModel | EmailAlreadyExistsError | UnmatchingPasswordsError> {
    const users = this.getRegisteredUsers();
    const emailAlreadyExists = users.some(user => user.email === email);

    if (emailAlreadyExists) {
      return of(new EmailAlreadyExistsError());
    }

    const newUser: UserModel = {
      id: this.generateRandomUserId(),
      name,
      email,
      password
    };

    localStorage.setItem(this.usersKey, JSON.stringify([...users, newUser]));
    this.login(email, password);
    return of(newUser);
  }

  private getRegisteredUsers(): UserModel[] {
    const storageContent = localStorage.getItem(this.usersKey) || '[]';
    return JSON.parse(storageContent);
  }

  private generateRandomUserId(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
}
