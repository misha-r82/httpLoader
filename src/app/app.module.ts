import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GitSearchService} from './git-search.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {GIT_URL, GIT_URL_TOKEN} from './config';
import {GitInterceptorService} from './git-interceptor.service';
import { GitProjectViewComponent } from './git-project-view/git-project-view.component';
import { ResultFilterPipe } from './result-filter-pipe.pipe';
import { ChechedFilterPipe } from './cheched-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitProjectViewComponent,
    ResultFilterPipe,
    ChechedFilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [GitSearchService,
    {provide: GIT_URL_TOKEN, useValue: GIT_URL},
    {provide: HTTP_INTERCEPTORS, useClass: GitInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
