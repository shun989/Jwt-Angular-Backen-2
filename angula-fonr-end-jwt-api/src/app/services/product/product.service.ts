import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.authUrl + '/products');
  }

  add(product: any): Observable<any> {
    return this.http.post(environment.authUrl + '/products', product);
  }


  delete(id: number): Observable<any> {
    return this.http.delete(environment.authUrl + '/products/' + id)
  }
}
