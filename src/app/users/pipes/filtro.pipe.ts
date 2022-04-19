import { Pipe, PipeTransform } from '@angular/core';
import {Result} from '../interfaces/user.interface'

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(users: Result[], page: number =0): Result[] {
    return users.slice(page, page+10);
  }

}
