import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  selectedFilesCsv?: FileList;
  selectedFilesJson?: FileList
  currentFileCsv?: File;
  currentFileJson?: File;
  progressCsv = 0;
  progressJson = 0;
  messageCsv = '';
  messageJson = '';
  fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  selectFileCsv(event: any): void {
    this.selectedFilesCsv = event.target.files;
  }

  uploadCsv(): void {
    this.progressCsv = 0;
    if (this.selectedFilesCsv) {
      const file: File | null = this.selectedFilesCsv.item(0);
      if (file) {
        this.currentFileCsv = file;
        this.uploadService.uploadCsv(this.currentFileCsv).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progressCsv = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.messageCsv = event.body.messageCsv;
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progressCsv = 0;
            if (err.error && err.error.messageCsv) {
              this.messageCsv = err.error.messageCsv;
            } else {
              this.messageCsv = 'Could not upload the file!';
            }
            this.currentFileCsv = undefined;
          }
        });
      }
      this.selectedFilesCsv = undefined;
    }
  }

  selectFileJson(event: any): void {
    this.selectedFilesJson = event.target.files;
  }
  uploadJson(): void {
    this.progressJson = 0;
    if (this.selectedFilesJson) {
      const file: File | null = this.selectedFilesJson.item(0);
      if (file) {
        this.currentFileJson = file;
        this.uploadService.uploadJson(this.currentFileJson).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progressJson = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.messageJson = event.body.messageJson;
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progressJson = 0;
            if (err.error && err.error.message) {
              this.messageJson = err.error.messageJson;
            } else {
              this.messageJson = 'Could not upload the file!';
            }
            this.currentFileJson = undefined;
          }
        });
      }
      this.selectedFilesJson = undefined;
    }
  }
  ngOnInit(): void {
    // this.fileInfos = this.uploadService.getFiles();
  }
}