import { Pipe, PipeTransform } from '@angular/core';
import {GitItem} from './gitItem.model';

@Pipe({
  name: 'chechedFilter',
  pure: false,
})
export class ChechedFilterPipe implements PipeTransform {

  transform(items: GitItem[], selectChecked : boolean): any {
    //console.log(`${selectChecked} pipe`);
    if (!items) return items;
    return items.filter(i=>{return  i.selected === selectChecked});
  }

}

