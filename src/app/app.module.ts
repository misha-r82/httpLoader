import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GitSearchService} from './git-search.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {GIT_URL, GIT_URL_TOKEN} from './config';
import {GitInterceptorService} from './git-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [GitSearchService,
    {provide: GIT_URL_TOKEN, useValue:GIT_URL},
    {provide: HTTP_INTERCEPTORS, useClass:GitInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
