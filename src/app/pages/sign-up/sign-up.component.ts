import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '@config/label';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '@utils/utils.service';
import { signUpInterface } from '@config/interfaces/auth.interface';
import { AuthService } from '@services/auth/auth.service';
import { phoneValidator } from '@helpers/validator/phone.validator';
import { passwordValidator } from '@helpers/validator/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  label = Label;
  signUpForm!: FormGroup;
  constructor(
    private router: Router,
    private utils: UtilsService,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  onLogin() {
    this.router.navigate(['login'])
  }

  onSubmit() {
    const payload: signUpInterface = {
      password: this.signUpForm.get('password')?.value,
      username: this.signUpForm.get('username')?.value,
      email: this.signUpForm.get('email')?.value,
      name: this.signUpForm.get('name')?.value,
      phone: this.signUpForm.get('phone')?.value
    };
    if (this.signUpForm.invalid) {
      this.validateAllFormFields(this.signUpForm);
      return this.utils.showError(this.label.message.pleasefillform)
    } else {
      this.authService.signUp(payload).subscribe(succes => {
        this.utils.hideLoading();
        console.log('sue', succes);
      }, error => {
        if (error?.error) {
          const tmp: any = error.error;
          if (tmp.message?.length) {
            const arrayValidators: any[] = tmp.message;
            arrayValidators.forEach(errArr => {
              this.signUpForm.get(errArr.parameters)?.markAsTouched();
            })
            return this.utils.showError(this.label.message.errorServer);
          } else {
            return this.utils.showError(tmp.message);
          }
        } else {
          return this.utils.showError(this.label.message.errorServer);
        }
      })
    }

  }

  initForm(): void {
    this.signUpForm = this.fb.group({
      username: [null, {
        validators: [
          Validators.required,
          Validators.maxLength(50)
        ],
        updateOn: 'blur'
      }],
      password: [null, {
        validators: [
          Validators.required,
          Validators.maxLength(200),
          passwordValidator()
        ],
        updateOn: 'blur'
      }],
      email: [null, {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(120)
        ],
        updateOn: 'blur'
      }],
      name: [null, {
        validators: [
          Validators.required,
          Validators.maxLength(80)
        ],
        updateOn: 'blur'
      }],
      phone: [null, {
        validators: [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(11),
          phoneValidator()
        ],
        updateOn: 'blur'
      }]
    })
  }

  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  get passwordField() { return this.signUpForm.get('password'); }
  get usernameField() { return this.signUpForm.get('username'); }
  get emailField() { return this.signUpForm.get('email'); }
  get nameField() { return this.signUpForm.get('name'); }
  get phoneField() { return this.signUpForm.get('phone'); }

}
