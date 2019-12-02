import {Component, EventEmitter, Output} from '@angular/core';
import {GitSearchService} from './git-search.service';
import {GitItem} from './gitItem.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  items: GitItem[];
  searchMask: string;

//  @Output() maskChanged = new EventEmitter<boolean>();
  constructor(private httpLoader: GitSearchService){}
  btnLoadClick()
  {
    this.httpLoader.loadAddr(this.searchMask).subscribe((res)=>
    {
      this.items = res;
      console.log(res);
    });
  }

  onSearchMaskChanged($event: Event)
  {
    //console.log("Sarch");
    this.searchMask = (event.target as HTMLInputElement).value;
  }


}
