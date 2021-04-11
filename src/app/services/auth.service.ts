import { Observable } from 'rxjs';
import { EmailAlreadyExistsError } from '../errors/email-already-exists-error';
import { InvalidCredentialsError } from '../errors/invalid-credentials-error';
import { UserModel } from '../models/user.model';

export abstract class AuthService {
  abstract login(email: string, password: string): Observable<string | InvalidCredentialsError>;
  abstract logout(): Observable<void>;
  abstract getLoggedUser(): Observable<UserModel>;
  abstract isUserLoggedIn(): Observable<boolean>;
  abstract register(name: string, email: string, password: string): Observable<UserModel | EmailAlreadyExistsError>;
}
