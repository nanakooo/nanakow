import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MembersListReq, MembersData } from '../models/members-list';
import { CustomResponse } from '../models/custom-response';

@Injectable({
  providedIn: 'root'
})

export class MembersListService {
  constructor(
    private http: HttpClient
  ) {}

  getmembersList(data: MembersListReq): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/customer/user/list', data);
  }
  editMember(data: MembersData): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/customer/user/commit', data);
  }
  delMember(data: Array<any>): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/customer/user/remove', data);
  }
}
