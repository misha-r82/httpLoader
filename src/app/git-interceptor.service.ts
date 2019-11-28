import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GIT_URL_TOKEN} from './config';
import {filter, map} from 'rxjs/operators';
import {GitItem} from './gitItem.model';

@Injectable()
export class GitInterceptorService implements HttpInterceptor
{
  constructor(@Inject(GIT_URL_TOKEN) private gitUrl: string ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const gitReq = req.clone({url: `${this.gitUrl}${req.url}`});
    return next.handle(gitReq).pipe(filter(this.isHttpResponce),
      map((res) => res.clone({body : res.body && res.body.items
          .map(i => {
            const itm  = new GitItem();
            itm.description = i.description;
            itm.gitUrl = i.html_url;
            itm.stargazersCount = i.stargazers_count;
            itm.size = i.size;
            return itm;
          }

          )}))
    );
  }

  private isHttpResponce(event: HttpEvent<any>): event is HttpResponse<any>{
    if (event instanceof HttpResponse) {return true};
    return false;
  }
}
