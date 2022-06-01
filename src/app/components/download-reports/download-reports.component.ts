import { Component, OnInit } from '@angular/core';
import { DownloadReportService } from '../../services/download-report.service';

@Component({
  selector: 'app-download-reports',
  templateUrl: './download-reports.component.html',
  styleUrls: ['./download-reports.component.css']
})
export class DownloadReportsComponent implements OnInit {

  constructor(private downloadReportService:DownloadReportService) { }

  downloadReport():void{
    this.downloadReportService.downloadReport()
    .subscribe(resp =>{
      let fileName = resp.headers.get('content-disposition')
      ?.split(';')[0].split('=')[0];
      console.log(resp.headers)
      let blob:Blob=resp.body as Blob;
      let a = document.createElement('a');
      //a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();     
    }) 
  }

  ngOnInit(): void {
  }

}
