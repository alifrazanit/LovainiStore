import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '@config/label';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '@utils/utils.service';
import { signUpInterface } from '@config/interfaces/auth.interface';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  label = Label;
  signUpForm!: FormGroup;
  constructor(
    private router: Router,
    private utils: UtilsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  onLogin(){
    this.router.navigate(['login'])
  }

  onSubmit(){
    const payload:signUpInterface= {
      password: this.signUpForm.get('password')?.value,
      username: this.signUpForm.get('username')?.value,
      email: this.signUpForm.get('email')?.value,
      name: this.signUpForm.get('name')?.value,
      phone: this.signUpForm.get('phone')?.value
    };
    if(this.signUpForm.invalid){
      this.validateAllFormFields(this.signUpForm);
      return this.utils.showError(this.label.message.pleasefillform)
    } else {
      this.authService.signUp(payload).subscribe(succes => {
        this.utils.hideLoading();
        console.log('sue', succes);
      }, error =>{
        if(error?.error){
          return this.utils.showError(error.message);
        } else {
          return this.utils.showError(this.label.message.errorServer);
        }
      })
    }
  
  }

  initForm(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
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

}
