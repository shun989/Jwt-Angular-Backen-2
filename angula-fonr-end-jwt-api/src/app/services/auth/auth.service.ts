import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {User} from "../../shared/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private checkLogin = new BehaviorSubject(false);
  private getUserLogin = new BehaviorSubject(null);
  currentLogin = this.checkLogin.asObservable();
  currentUserLogin = this.getUserLogin.asObservable();
  userValue: User | undefined;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/auth/login', data);
  }

  changeIsLogin(isLogin:boolean){
    this.checkLogin.next(isLogin);
  }
  changeUserLogin(user:any){
    this.getUserLogin.next(user);
  }

  isLogin() {
    return !!localStorage.getItem('token');
  }

  createUser(data: any) {
    return this.http.post<any>(environment.ApiUrl + '/auth/register', data)
      .pipe(map((res: any)=>{
        console.log(res)
        return res;
      }))
  }
  logout(){
    let token =localStorage.getItem('token');
    let headers_object = new HttpHeaders().set('Authorization', 'Bearer' + token);
    let httpOptions = {
      headers: headers_object
    };
    return this.http.post<any>(environment.ApiUrl + '/logout', null, httpOptions);
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
}
