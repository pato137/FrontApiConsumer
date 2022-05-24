import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FectAllUserResponse, Result } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TopTenService {
  private urlPage: string = 'http://localhost:8085/users/top/?';
  //private urlPage2: string = 'http://localhost:8085/user/';

  constructor(private http: HttpClient) { }

  getAllUserTop() {
    // HACEMOS LA DEFINICION DE UN OBSERVABLE <OBJECT> ESPERANDO EL SUBSCRIBE
    console.log(`${this.urlPage}`)
    return this.http.get<FectAllUserResponse>(`${this.urlPage}`)
      .pipe(
        map(this.TransformResultsToUsers)
      )
  }


  /* getAllUserByDates() {
    //requestparam url example
    const range: {
      from_date: 1,
      to_date: 1
    }
    console.log(`${this.urlPage2}`)
    return this.http.get<FectAllUserResponse>(`${this.urlPage2}`),range
      .pipe(
        map(this.TransformResultsToUsers)
      )
  } */

  private TransformResultsToUsers(resp: FectAllUserResponse): Result[] {
    const topList: Result[] = resp.results.map(us => {
      return {
        user_name: us.user_name,
        user_surname: us.user_surname,
        user_email: us.user_email,
        user_joined_date: us.user_joined_date,
        num_video_consumed_minutes: us.num_video_consumed_minutes,
        last_date_visit: us.last_date_visit

      }
    }
    )
    return topList;
  }
}
