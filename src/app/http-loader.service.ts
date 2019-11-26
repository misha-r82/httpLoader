import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpLoaderService {

  constructor(private http: HttpClient) { }

  public loadAddr(url: string): Observable<any>
  {
    return this.http.get('http://localhost:3000/');

  }
}
