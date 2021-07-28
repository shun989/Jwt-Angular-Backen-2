import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if (localStorage.getItem('currentUser')) {
  //     // logged in so return true
  //     return true;
  //   }
  //
  //   // not logged in so redirect to login page with the return url and return false
  //   this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
  //   return false;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLogin()) {
      window.alert("Access not allowed!");
      this.router.navigate(['../login'])
    }
    return true;
  }

}
