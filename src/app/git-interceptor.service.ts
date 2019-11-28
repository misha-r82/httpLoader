import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GIT_URL_TOKEN} from './config';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class GitInterceptorService implements HttpInterceptor{

  constructor(@Inject(GIT_URL_TOKEN) private gitUrl : string ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const gitReq = req.clone({url:`${this.gitUrl}${req.url}`});
    return next.handle(gitReq).pipe(filter(this.isHttpResponce),
      map((res)=>res.clone({body : res.body && res.body.items}))
    );
  }
  private isHttpResponce(event : HttpEvent<any>): event is HttpResponse<any>{
    if (event instanceof HttpResponse){return true};
    return false;
  }
}
