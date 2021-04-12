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
  passwordMinLength = 6;

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
    const { name, email, password } = this.form.getRawValue();

    this.authService.register(name, email, password).subscribe(result => {
      if (result instanceof Error) {
        return this.toastrService.error(result.message);
      }
      this.toastrService.success('Conta cadastrada com sucesso!');
      return this.router.navigate(['/albums']);
    });
  }

  private setForm(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, this.notBlankValidator.bind(this)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(this.passwordMinLength)]]
    });
  }

  private notBlankValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && !control.value.trim()) {
      return { notBlank: true };
    }
    return null;
  }
}
