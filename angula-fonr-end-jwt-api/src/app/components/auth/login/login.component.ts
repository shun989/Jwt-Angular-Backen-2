import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin !: FormGroup;

    errMessage = '';
    constructor(public authService: AuthService,
      private fb: FormBuilder,
      private route: Router) {
    }

    ngOnInit(): void {
      this.formLogin = this.fb.group({
        email: ['',[Validators.required]],
        password: ['',[Validators.required]]
      })
    }

    submitLogin() {
      let data = this.formLogin?.value;
      this.authService.login(data).subscribe(res => {
        if (res.error) {
          this.errMessage = res.message
        } else {
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.changeIsLogin();
          this.changeUserLogin();
          this.route.navigate(['../home'])
        }
      })
    }

    changeIsLogin(){
      let isLogin = this.authService.isLogin()
      this.authService.changeIsLogin(isLogin);
    }

    changeUserLogin(){
      let user =  JSON.parse(<string>(localStorage.getItem('user')));
      return this.authService.changeUserLogin(user)
    }


  get email(){
    return this.formLogin?.get('email')
  }
  get password(){
    return this.formLogin?.get('password')
  }

}
