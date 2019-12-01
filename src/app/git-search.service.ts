import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class GitSearchService {

  constructor(private http: HttpClient) { }

  public loadAddr(searchMask: string): Observable<any>
  {
    const httpPars = new HttpParams().set('q', searchMask);
    return this.http.get('search/repositories', {params: httpPars});
  }
}
