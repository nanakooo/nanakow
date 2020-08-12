import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from '../models/custom-response';
import { ResourceServiceReq, ResourceServiceData } from '../models/resource-service';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  constructor(
    private http: HttpClient
  ) {}

  getResourceServiceList(data: ResourceServiceReq): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/data/server/list', data);
  }
  eidtResourceService(data: ResourceServiceData): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/data/server/commit', data);
  }
  delResourceService(data: Array<any>): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/data/server/remove', data);
  }
}
