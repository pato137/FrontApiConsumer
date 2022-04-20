import { Pipe, PipeTransform } from '@angular/core';
import {Result} from '../interfaces/user.interface'

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(users: Result[], page: number =0, search:string=''): Result[] {
    if(search.length ===0){
      return users.slice(page, page+10);
    }
    

    const filterUsers = users.filter(user => user.userName.includes (search));
    return filterUsers;
  }

}
