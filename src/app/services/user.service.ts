import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FectAllUserResponse, Result} from '../interfaces/user.interface';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlPage: string =  'http://localhost:8082/users/page/?page=';

  constructor( private http : HttpClient) { }




// DEFINIMOS EL OBSERVABLE PARA OBTENER EL TOTAL DE LAS PAGINAS

  // CREAMOS UN METODO PARA OBTENER LOS USUARIOS HACIENDO LA PETICION A LA URL
  getTotalPages(){
    const url = 'http://localhost:8082/users/page/';
  
    //AGREGO EL RETURM QUE VA A ESPERAR QUE SE SUSCRIBAN DESDE EL USUARIOS.COMPONENT 
    //PARA OBTENER LOS DATOS
    return this.http.get( url );
  }
  



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
                user_name: us.user_name,
                user_surname: us.user_surname,
                user_email: us.user_email,
                user_joined_date: us.user_joined_date,
                num_video_consumed_minutes: us.num_video_consumed_minutes,
                last_date_visit: us.last_date_visit

      }
    } 
    )
    return userList;
  
  }

}
