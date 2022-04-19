import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FectAllUserResponse, Result} from '../interfaces/user.interface';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

private urlPage: string =  'http://localhost:8081/api/users/?page=';

//public page : number = 0;

constructor( private http : HttpClient) { }
getAllUser(pageurl:number){
// HACEMOS LA DEFINICION DE UN OBSERVABLE <OBJECT> ESPERANDO EL SUBSCRIBE
console.log( `${ this.urlPage+(pageurl) }`)
 return this.http.get<FectAllUserResponse>(  `${ this.urlPage+(pageurl) }`)
            .pipe(
              map( this.TransformResultsToUsers)
            )
}

//CREAMOS UN METODO PRIVADO Y LE DAMOS LOS PARAMETROS RESP DEL TIPO fETCH...
private TransformResultsToUsers( resp : FectAllUserResponse) : Result[] {
 
  const userList : Result[] = resp.results.map( us => {
      return {
                id: us.id,
                userName: us.userName,
                userSurname: us.userSurname,
                userEmail: us.userEmail,
                userJoinedDate: us.userJoinedDate,
                numVideoConsumedMinutes: us.numVideoConsumedMinutes,
                lastDateVisit: us.lastDateVisit

      }
  }

  )
  return userList;
 
}

}
