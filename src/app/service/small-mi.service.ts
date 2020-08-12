import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SmallMiReq, SmallMiData,SmallMiSwitch} from '../models/small-mi';
import { CustomResponse } from '../models/custom-response';

@Injectable({
  providedIn: 'root'
})

export class SmallMiService {
  constructor(
    private http: HttpClient
  ) {}


  //获取列表
  getsmallMi(data: SmallMiReq): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/secretary/get-total', {
      "current": 0,
      "size": 10
    });
  
  }
  //新增
  newsmallMi(data: SmallMiData): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/admin/secretary/save-secretary', data);
  
  }
  // //详情
  // editssmallMi(data: SmallMiReq): Observable<CustomResponse<any>> {
  //   return this.http.post<CustomResponse<any>>('//admin/secretary/get-detail', data);
  
  // }
  开关
  switchsmallMi(data: SmallMiSwitch): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('//admin/secretary/switch/{assistanrAccount}/{open}', data);
  
  }
}
