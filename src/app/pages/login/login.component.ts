import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '@config/label';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  label = Label;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.router.navigate(['sign-up'])
  }

}
