import { Pipe, PipeTransform } from '@angular/core';
import {GitItem} from './gitItem.model';

@Pipe({
  name: 'resultFilter'
})
export class ResultFilterPipe implements PipeTransform {

  transform(items: GitItem[], searchMask : string): any {
    if (!items || !searchMask) return items;
    return items.filter(i=>i.description !=null)
      .filter(i=>i.description.toLowerCase().includes(searchMask.toLowerCase()));
  }

}
