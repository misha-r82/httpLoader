import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpLoaderService} from './http-loader.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [HttpLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
