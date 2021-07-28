import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {

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

  // logout():void {
  //   this.authService.logout().subscribe(res => {
  //     console.log(res)
  //     localStorage.removeItem('token');
  //     localStorage.removeItem('user');
  //     this.checkLogin();
  //   });
  // }

}
