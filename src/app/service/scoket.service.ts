import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from '../models/custom-response';
import { ScoketReq, ScoketData } from '../models/scoket';

@Injectable({
  providedIn: 'root'
})

export class ScoketService {
  constructor(
    private http: HttpClient
  ) {}

  getScoketList(data: ScoketReq): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/websocket/client/list', data);
  }
  editScoket(data: ScoketData): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/websocket/client/commit', data);
  }
  delScoket(data: Array<any>): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/websocket/client/remove', data);
  }
}
