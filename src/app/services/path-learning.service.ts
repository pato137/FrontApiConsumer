import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathLearningService {

  private urlPage: string ='';

  constructor(private http : HttpClient) { }
  
}
