import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/user.interface';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(users: Result[],  search:string='',): Result[] {
    
    const filterUsers = [];
    for(const post of users){
      if(post.user_email.toLowerCase().indexOf(search.toLowerCase())> -1){
        filterUsers.push(post)
      }
    }
    return filterUsers;
  }
}
