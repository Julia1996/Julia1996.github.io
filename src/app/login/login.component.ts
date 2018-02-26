import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AutorizationService } from '../autorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginControl: FormGroup;
  constructor(private _autorizationService: AutorizationService, private _router: Router) { }

  ngOnInit() {
    if (this._autorizationService.isAutorized) {
      this._router.navigate(['/post/letters/inbox']);
    }
    this.loginControl = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    if (!this.loginControl.valid) {
      alert('You should input login and password');
    }
    if ( this._autorizationService.login(this.loginControl.value.login, this.loginControl.value.password) ) {
      this._router.navigate(['/post/letters/inbox']);
    } else {
      this.loginControl.controls['password'].setValue('');
      alert('Authorization failed');
    }
  }
}
