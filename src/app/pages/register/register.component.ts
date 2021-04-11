import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly toastrService: ToastrService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  register(): void {
    const { name, email, password, passwordConfirmation } = this.form.getRawValue();

    this.authService.register(name, email, password, passwordConfirmation).subscribe(result => {
      if (result instanceof Error) {
        return this.toastrService.error(result.message);
      }
      this.toastrService.success('Conta cadastrada com sucesso!');
      return this.router.navigate(['/albums']);
    });
  }

  private setForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordConfirmation: [null, [Validators.required, this.passwordConfirmationValidator.bind(this)]]
    });
  }

  private passwordConfirmationValidator(control: AbstractControl): ValidationErrors | null {
    if (!this.form) return null;

    if (control.value !== this.form.get('password').value) {
      return { passwordsNotMatching: true };
    }
    return null;
  }
}
