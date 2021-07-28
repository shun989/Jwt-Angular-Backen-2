import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../shared/user";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser !: User;

  constructor(
    public authService: AuthService,
  ) {

  }

  ngOnInit() { }

  user(){
    // @ts-ignore
    this.authService.login().subscribe(res=>{
      return this.currentUser = res;
    })
  }
}
