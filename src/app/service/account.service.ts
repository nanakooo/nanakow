import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRequest } from '../models/login';
import { CustomResponse } from '../models/custom-response';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(
    private http: HttpClient
  ) {}

  login(data: UserRequest, headers): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/auth/jwt/token', data, {
      headers: new HttpHeaders(headers)
    });
  }
  public set token(token: string) {
    if (token) {
      sessionStorage.setItem('token', token);
    } else {
      sessionStorage.removeItem('token');
    }
  }
  public get token() {
    return sessionStorage.getItem('token');
  }
}
