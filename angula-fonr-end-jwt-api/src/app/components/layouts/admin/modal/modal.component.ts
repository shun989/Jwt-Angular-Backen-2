import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isLogin: boolean | undefined

  constructor(public authService : AuthService)
  { }

  ngOnInit(): void {
    this.authService.currentLogin.subscribe(isLogin => this.isLogin = isLogin);
    this.checkLogin();
  }

  checkLogin():void {
    this.isLogin = this.authService.isLogin();
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
