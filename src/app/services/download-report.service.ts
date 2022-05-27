import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadReportService {

  constructor(private HttpClient: HttpClient) { }

  public downloadReport(){
    return this.HttpClient.get("http://localhost:8087/users-unfinished/download",
    {responseType: 'blob'})
  }
}
