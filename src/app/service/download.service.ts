import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }

  public postDownload(url: string, req: any): Observable<string> {
    return new Observable((observer) => {
      this.httpPostdownload(url, req).subscribe(res => {
        console.log(res)
        // const contentDisposition = res.headers.get('content-disposition');
        // if (!contentDisposition) {
        //   observer.next(contentDisposition);
        //   return;
        // }
        const blob = new Blob([res.body], { type: "application/vnd.ms-excel" });
        this.downloadFileFromBlob(blob);
        // observer.next(contentDisposition);
      }, (err) => {
        observer.error(err);
      });
    });
  }

  /**
   * 下载文件事件
   * @method
   * @for DownloadService
   * @param fileName: 文件名
   * @param blob: 文件
   */
  private downloadFileFromBlob(blob: any): void {
    const aLink = document.createElement('a');

    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = '激活码列表';
    aLink.href = URL.createObjectURL(blob);

    aLink.dispatchEvent(evt);
    aLink.click();
  }

  /**
   * 文件下载请求
   * @method
   * @for DownloadService
   * @returns http post请求，res.data为文件
   */
  private httpPostdownload(url: string, req: any): Observable<HttpResponse<Blob>> {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Expose-Headers', 'etag');
    return this.http.post(url, req, { headers, observe: 'response', responseType: 'blob' });
  }
}
