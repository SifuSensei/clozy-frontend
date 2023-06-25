import { Pipe, PipeTransform } from '@angular/core';
import { Iclothes } from '../interfaces/iclothes';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Iclothes[], args?: any): Iclothes[] {


    if (value.length === 0 || !args) {
      return value;
    }
    
    args = args.toLowerCase();

    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })




    
  }

}
