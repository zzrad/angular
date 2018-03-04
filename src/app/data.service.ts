import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Iclient, RootObject } from './iclient';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {
  myUrl = 'http://localhost:1234/products';

  constructor(private http: HttpClient) { }

  getClients(): Observable<RootObject>
  {
    return this.http.get<RootObject>(this.myUrl);
  }

}
