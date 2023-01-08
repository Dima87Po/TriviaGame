import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './models';

@Pipe({
  name: 'sortPipe',
})
export class SortPipe implements PipeTransform {
  transform(value: IUser[]): IUser[] {
    if (!value) {
      return [];
    }

    return value.sort((a: IUser, b: IUser) => b.score - a.score);
  }
}
