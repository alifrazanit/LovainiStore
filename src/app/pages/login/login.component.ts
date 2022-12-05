import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '@config/label';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth/auth.service';
import { loginInterface } from '@config/interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  label = Label;
  loginForm!: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSignUp(){
    this.router.navigate(['sign-up'])
  }

  onSubmit(){
    const payload:loginInterface= {
      password: this.loginForm.get('password')?.value,
      username: this.loginForm.get('username')?.value
    };
    this.authService.login(payload).subscribe(succes => {
      console.log('succes', succes);
    })
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: []
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: []
      })
    })
  }
}
