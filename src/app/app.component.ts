import { Component } from '@angular/core';
import {GitSearchService} from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  content : string = 'content';

  constructor(private httpLoader : GitSearchService){}
  btnLoadClick()
  {
    this.httpLoader.loadAddr("https://www.avito.ru/rossiya").subscribe((res)=>{
      this.content = res;
      console.log(res);
    })
  }
}
