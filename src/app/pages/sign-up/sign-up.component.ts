import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '@config/label';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  label = Label;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.router.navigate(['login'])
  }

}
