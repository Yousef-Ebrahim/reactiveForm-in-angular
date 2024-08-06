import { MatIconModule } from '@angular/material/icon';
import { loginPayload } from './../../interfaces/auth.interface';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private FB: FormBuilder, private _AuthService: AuthService) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.initLoginForm();
  }
  apiErrorMessage: string = '';
  isShowPassword: boolean = false;
  setIsShowPassword(){
    this.isShowPassword = !this.isShowPassword;
  }
  initLoginForm(): void {
    this.loginForm = this.FB.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  submitLogin(): void {
    debugger;
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.callLoginApi();
    }
  }
  callLoginApi(): void {
    this._AuthService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
