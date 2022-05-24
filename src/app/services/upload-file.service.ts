import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private baseUrl: string = 'http://localhost:8086/import-counselee/?file=';
  private url: string = 'http://localhost:8086/counselee/'

  private baseUrl2: string = 'http://localhost:8088/learning-path/?file='

  constructor(private http: HttpClient) { }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  /* getFiles(): Observable<any>{
    return this.http.get(`${this.url}`);
  } */
}
