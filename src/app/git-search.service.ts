import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GitSearchService {

  constructor(private http: HttpClient) { }

  public loadAddr(url: string): Observable<any>
  {
    let httpPars = new HttpParams().set('q', "grid");
    return this.http.get('search/repositories', {params: httpPars});



  }
}
