import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CustomResponse } from '../models/custom-response';
import { ActivationCodeReq, CreateActivationCode } from '../models/activation-code';
import { DownloadService } from './download.service';

@Injectable({
  providedIn: 'root'
})

export class ActiveaTionCodeService {
  constructor(
    private http: HttpClient,
    private downloadService: DownloadService
  ) {}
  getMembersTypeList(): Observable<CustomResponse<any>> {
    return this.http.get<CustomResponse<any>>('/customer/power/list');
  }
  getActiveaTionCodeList(data: ActivationCodeReq): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/customer/activation-code/record-list', data);
  }
  createActiveaTionCode(data: CreateActivationCode): Observable<CustomResponse<any>> {
    return this.http.post<CustomResponse<any>>('/customer/activation-code/create', data);
  }

  public exportActiveaTionCode(req: string): Observable<string> {
    return this.downloadService.postDownload('/customer/activation-code/export', req);
  }  
}
