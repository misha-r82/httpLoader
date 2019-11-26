import { Component } from '@angular/core';
import {HttpLoaderService} from './http-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  content : string = 'content';

  constructor(private httpLoader : HttpLoaderService){}
  btnLoadClick()
  {
    this.httpLoader.loadAddr("https://www.avito.ru/rossiya").subscribe((res)=>{
      this.content = res;
    })
  }
}
