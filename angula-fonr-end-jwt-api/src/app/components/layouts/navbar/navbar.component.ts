import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../shared/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean | undefined
  user: any;
  constructor(public authService : AuthService)
  { }

  ngOnInit(): void {
    this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    this.authService.currentUserLogin.subscribe(user => this.user = user);
    this.checkLogin();
    this.getUserLogin()
  }

  checkLogin():void {
    this.isLogin = this.authService.isLogin();
  }

  getUserLogin():void {
    if(this.authService.isLogin()) {
      this.user = JSON.parse(<string>(localStorage.getItem('user')));
    }
    console.log(this.user.username)
  }

  logout():void {
    this.authService.logout().subscribe(res => {
      console.log(res)
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.checkLogin();
    });
  }
}
