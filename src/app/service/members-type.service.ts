import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from '../models/custom-response';
import { MembersTypeReq } from '../models/members-type';

@Injectable({
  providedIn: 'root'
})

export class MembersTypeService {
  constructor(
    private http: HttpClient
  ) {}
  getMembersTypeList(): Observable<CustomResponse<any>> {
    return this.http.get<CustomResponse<any>>('/customer/power/list');
  }
  eidtMembersType(data: MembersTypeReq): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/customer/power/update', data);
  }
}
